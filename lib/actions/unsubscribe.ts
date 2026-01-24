"use server";

import UnsubscribeConfirmationEmail from "@/components/emails/unsubscribe";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RESEND_TOPIC_ID = process.env.RESEND_TOPIC_ID;

export async function unsubscribeUser(email: string) {
  try {
    if (!email) {
      throw new Error("Invalid unsubscribe request");
    }

    if (!RESEND_TOPIC_ID) {
      throw new Error("RESEND_TOPIC_ID is required for topic-based unsubscribe");
    }

    const { error: topicError } = await resend.contacts.topics.update({
      email,
      topics: [{ id: RESEND_TOPIC_ID, subscription: "opt_out" }],
    });
    if (topicError) {
      console.error("[unsubscribe] topics.update error:", topicError);
      throw new Error("Failed to unsubscribe");
    }

    // Send confirmation email
    await resend.emails.send({
      from: "TheFalse team <join@mail.thefalse.net>",

      to: email,
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
