import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["khimk635@gmail.com"],
      subject: "New message from your website",
      react: `
        <h2>New message from ${name}</h2>
        <p>From: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
