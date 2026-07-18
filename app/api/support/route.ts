import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const supportSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  issueType: z.string().min(1).max(50),
  subject: z.string().min(2).max(200),
  description: z.string().min(10).max(5000),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request.headers);
    if (!rateLimit(`support:${ip}`, { limit: 3, windowMs: 10 * 60_000 })) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const parsed = supportSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      issueType: formData.get("issueType"),
      subject: formData.get("subject"),
      description: formData.get("description"),
    });
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, issueType, description } = parsed.data;
    const subject = parsed.data.subject.replace(/[\r\n]+/g, " ");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to support team
    const { error: supportError } = await resend.emails.send({
      from: "Support <support@mail.thefalse.net>",
      to: ["bkht@thefalse.net"],
      replyTo: email,
      subject: `New Support Request: ${subject}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Issue Type:</strong> ${escapeHtml(issueType)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Description:</strong></p>
        <p>${escapeHtml(description)}</p>
      `,
    });
    if (supportError) {
      console.error("[support] Resend error:", supportError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const { error: confirmationError } = await resend.emails.send({
      from: "Support <support@mail.thefalse.net>",
      to: [email],
      replyTo: "bkht@thefalse.net",
      subject: "Support Request Received",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>We have received your support request and will get back to you as soon as possible.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li><strong>Issue Type:</strong> ${escapeHtml(issueType)}</li>
          <li><strong>Subject:</strong> ${escapeHtml(subject)}</li>
        </ul>
        <p>If you have any additional information to add, please reply to this email.</p>
        <p>Best regards,<br>The Support Team</p>
      `,
    });
    if (confirmationError) {
      console.error("[support] Confirmation email error:", confirmationError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
