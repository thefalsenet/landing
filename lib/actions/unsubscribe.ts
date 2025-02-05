"use server";

import UnsubscribeConfirmationEmail from "@/components/emails/unsubscribe";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function unsubscribeUser(email: string) {
  try {
    // Verify the unsubscribe token (you should implement your own verification logic)
    // This is a simplified example
    if (!email) {
      throw new Error("Invalid unsubscribe request");
    }

    // Update user preferences in your database
    // This is where you'd implement your database update logic
    await resend.contacts.update({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Send confirmation email
    await resend.emails.send({
      from: "thefalse <noreply@thefalse.net>",
      to: email,
      subject: "Unsubscribe Confirmation",
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
