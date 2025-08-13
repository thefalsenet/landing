import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import FeedbackConfirmationEmail from "@/components/emails/feedbacks";
import FeedbackAdminNotificationEmail from "@/components/emails/feedback-admin-notification-email";

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
        react: FeedbackConfirmationEmail({
          allowPublicDisplay: validatedData.allowPublicDisplay,
          name: validatedData.name,
          rating: validatedData.rating,
          testimonial: validatedData.testimonial,
        }),
      });
    }

    // Send notification email to admin
    await resend.emails.send({
      from: "thefalse <feedback@mail.thefalse.net>",
      to: ADMIN_EMAIL,
      subject: "New Feedback Received",
      react: FeedbackAdminNotificationEmail({
        allowPublicDisplay: validatedData.allowPublicDisplay,
        email: validatedData.email,
        name: validatedData.name,
        rating: validatedData.rating,
        role: validatedData.role,
        testimonial: validatedData.testimonial,
        submittedAt: new Date().toLocaleString(),
      }),
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
