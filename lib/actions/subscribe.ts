"use server";

import WaitlistWelcomeEmail, { generateWaitlistEmailText } from "@/components/emails/waitlist";
import WaitlistAdminNotificationEmail from "@/components/emails/waitlist-admin-notification-email";
import { Resend } from "resend";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const RESEND_AUDIENCE_ID =
  process.env.RESEND_AUDIENCE_ID || "5c616b0d-9278-4b19-98df-a375e1587077";

const RATE_LIMIT_MSG = "Too many requests. Please wait a moment and try again.";

function isRateLimitError(err: { name?: string; message?: string } | null): boolean {
  if (!err) return false;
  const name = (err.name || "").toLowerCase();
  const msg = (err.message || "").toLowerCase();
  return (
    name === "rate_limit_exceeded" ||
    /rate limit|rate_limit|too many requests|exceeded.*limit/.test(msg)
  );
}

export async function subscribe(formData: FormData) {
  const email = formData.get("email");
  const source = (formData.get("source") as string) || "main";

  try {
    const { email: validatedEmail } = subscribeSchema.parse({ email });

    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      return { success: false, message: "Email is not configured. Please try again later." };
    }

    // Add to Resend audience (best-effort; do not block welcome email)
    const { error: contactError } = await resend.contacts.create({
      email: validatedEmail,
      unsubscribed: false,
      audienceId: RESEND_AUDIENCE_ID,
    });

    // If contact already exists in audience, show "already on list" and skip welcome email
    if (contactError) {
      if (isRateLimitError(contactError)) {
        return { success: false, message: RATE_LIMIT_MSG };
      }
      const msg = (contactError.message || "").toLowerCase();
      if (/already|exists|duplicate|already in|already a member|already on|already subscribed/.test(msg)) {
        return { success: true, message: "You're already on the list." };
      }
      // other contact errors: continue and send welcome email (audience add is best-effort)
    }

    // Send welcome email to the user
    const { error: sendError } = await resend.emails.send({
      from: "TheFalse team <join@mail.thefalse.net>",
      to: validatedEmail,
      subject: "You’re on the waitlist",

      react: WaitlistWelcomeEmail({ email: validatedEmail }),
      text: generateWaitlistEmailText({ email: validatedEmail }),
      headers: {
        Name: "X-Entity-Ref-ID",
        Value: String(Date.now()),
      },
    });

    if (sendError) {
      console.error("[subscribe] Resend error:", sendError);
      if (isRateLimitError(sendError)) {
        return { success: false, message: RATE_LIMIT_MSG };
      }
      return {
        success: false,
        message: process.env.NODE_ENV === "development"
          ? `Email failed: ${sendError.message}`
          : "Something went wrong sending the confirmation. Please try again.",
      };
    }

    // Notify admin of new signup when configured (delayed to stay under Resend 2 req/s)
    if (ADMIN_EMAIL) {
      const payload = {
        from: "TheFalse team <join@mail.thefalse.net>" as const,
        to: ADMIN_EMAIL,
        subject: "New waitlist signup" as const,
        react: WaitlistAdminNotificationEmail({
          email: validatedEmail,
          source: source === "mobile" ? "mobile" : "main",
          subscribedAt: new Date().toLocaleString(),
        }),
      };
      setTimeout(
        () => resend.emails.send(payload).catch((err) => console.error("[subscribe] Admin notify error:", err)),
        1500
      );
    }

    return { success: true, message: "You're on the list! Check your email." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message };
    }
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
