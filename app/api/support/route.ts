import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const issueType = formData.get("issueType") as string;
    const subject = formData.get("subject") as string;
    const description = formData.get("description") as string;
    const screenshot = formData.get("screenshot") as File | null;

    // Send email to support team
    const supportEmail = await resend.emails.send({
      from: "Support <support@mail.thefalse.net>",
      to: ["bkht@thefalse.net"],
      subject: `New Support Request: ${subject}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Issue Type:</strong> ${issueType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    });

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: "Support <support@mail.thefalse.net>",
      to: [email],
      replyTo: "bkht@thefalse.net",
      subject: "Support Request Received",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>We have received your support request and will get back to you as soon as possible.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li><strong>Issue Type:</strong> ${issueType}</li>
          <li><strong>Subject:</strong> ${subject}</li>
        </ul>
        <p>If you have any additional information to add, please reply to this email.</p>
        <p>Best regards,<br>The Support Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, supportEmail, confirmationEmail },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
