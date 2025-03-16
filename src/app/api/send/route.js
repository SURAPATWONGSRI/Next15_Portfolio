import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Get the request body directly from req.json()
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("Form submission:", { name, email, subject, message });

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank You For contacting us!</p>
          <p>New Message submitted:</p>
          <p>From: {name}</p>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error processing email request:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
