import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "bkht@thefalse.net";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional(),
  role: z.string().min(2, "Role must be at least 2 characters"),
  rating: z.number().min(1).max(5),
  testimonial: z.string().min(10, "Testimonial must be at least 10 characters"),
  allowPublicDisplay: z.boolean().default(false),
});

export async function POST(request: Request) {
  try {
    // Check if request body exists
    if (!request.body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON format in request body" },
        { status: 400 }
      );
    }

    // Validate request body
    const validatedData = feedbackSchema.parse(body);

    // Post data to external API
    const response = await fetch("https://app.thefalse.net/api/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      throw new Error(`External API error: ${response.statusText}`);
    }

    const result = await response.json();

    // Send email notification to user
    if (validatedData.email) {
      await resend.emails.send({
        from: "thefalse <feedback@mail.thefalse.net>",
        to: validatedData.email,
        subject: "Thank you for your feedback!",
        html: `
          <h1>Thank you for your feedback!</h1>
          <p>Dear ${validatedData.name},</p>
          <p>We've received your feedback and appreciate you taking the time to share your thoughts with us.</p>
          <p>Your rating: ${validatedData.rating}/5</p>
          <p>Your testimonial: "${validatedData.testimonial}"</p>
          ${
            validatedData.allowPublicDisplay
              ? "<p>Your testimonial will be displayed publicly on our website.</p>"
              : ""
          }
          <p>Best regards,<br>thefalse Team</p>
        `,
      });
    }

    // Send notification email to admin
    await resend.emails.send({
      from: "thefalse <feedback@mail.thefalse.net>",
      to: ADMIN_EMAIL,
      subject: "New Feedback Received",
      html: `
        <h1>New Feedback Submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email || "Not provided"}</p>
        <p><strong>Role:</strong> ${validatedData.role}</p>
        <p><strong>Rating:</strong> ${validatedData.rating}/5</p>
        <p><strong>Testimonial:</strong> ${validatedData.testimonial}</p>
        <p><strong>Public Display:</strong> ${
          validatedData.allowPublicDisplay ? "Yes" : "No"
        }</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      { message: "Feedback submitted successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
