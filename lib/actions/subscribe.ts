"use server";

import WaitlistWelcomeEmail from "@/components/emails/waitlist";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function subscribe(formData: FormData) {
  const email = formData.get("email");

  try {
    // Validate email
    const { email: validatedEmail } = subscribeSchema.parse({ email });

    await resend.contacts.create({
      email: validatedEmail,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Send confirmation email
    await resend.emails.send({
      from: "thefalse team <join@thefalse.net>",
      to: validatedEmail,
      subject: "welcome to thefalse waitlist!",
      react: WaitlistWelcomeEmail({
        username: "book lover",
        email: validatedEmail,
      }),
      text: "Welcome to the waitlist! We'll let you know when we're ready to launch.",
      headers: {
        Name: "X-Entity-Ref-ID",
        Value: new Date().getTime() + "",
      },
    });

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
