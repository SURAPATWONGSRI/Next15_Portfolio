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
      to: ["khimk635@gmail.com", email], // ส่งเข้าอีเมลของคุณและอีเมลของผู้ติดต่อ
      subject: subject,
      react: (
        <>
          <div
            style={{
              fontFamily: "'Kanit', sans-serif",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "20px",
              color: "#333",
            }}
          >
            <h1
              style={{
                color: "#0070f3",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {subject}
            </h1>
            <div
              style={{
                backgroundColor: "#f4f4f4",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            ></div>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "10px",
                  marginBottom: "15px",
                }}
              >
                Message Details
              </h2>
              <p style={{ margin: "10px 0" }}>
                <strong>From:</strong> {name}
              </p>
              <p style={{ margin: "10px 0" }}>
                <strong>Email:</strong> {email}
              </p>
              <p style={{ margin: "10px 0" }}>
                <strong>Message:</strong>
              </p>
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "3px",
                  marginTop: "5px",
                }}
              >
                {message}
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              <p>© {new Date().getFullYear()} Surapat Wongsri.</p>
            </div>
          </div>
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
