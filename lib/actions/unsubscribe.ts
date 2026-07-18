"use server";

import { headers } from "next/headers";
import UnsubscribeConfirmationEmail from "@/components/emails/unsubscribe";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const RESEND_TOPIC_ID = process.env.RESEND_TOPIC_ID;

export async function unsubscribeUser(email: string, token: string) {
  try {
    const ip = getClientIp(await headers());
    if (!rateLimit(`unsubscribe:${ip}`, { limit: 5, windowMs: 10 * 60_000 })) {
      return {
        success: false,
        message: "Too many requests. Please wait a moment and try again.",
      };
    }

    const validatedEmail = z.string().email().safeParse(email);
    if (!validatedEmail.success || !verifyUnsubscribeToken(validatedEmail.data, token)) {
      return {
        success: false,
        message: "This unsubscribe link isn’t valid. Please use the link from your email.",
      };
    }

    if (!RESEND_TOPIC_ID) {
      throw new Error("RESEND_TOPIC_ID is required for topic-based unsubscribe");
    }

    const { error: topicError } = await resend.contacts.topics.update({
      email: validatedEmail.data,
      topics: [{ id: RESEND_TOPIC_ID, subscription: "opt_out" }],
    });
    if (topicError) {
      console.error("[unsubscribe] topics.update error:", topicError);
      throw new Error("Failed to unsubscribe");
    }

    // Send confirmation email
    await resend.emails.send({
      from: "TheFalse team <join@mail.thefalse.net>",

      to: validatedEmail.data,
      subject: "You’ve been unsubscribed",
      react: UnsubscribeConfirmationEmail(),
      text: UnsubscribeConfirmationEmail.text(),
    });

    return { success: true, message: "Successfully unsubscribed" };
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return {
      success: false,
      message: "Failed to unsubscribe. Please try again.",
    };
  }
}
