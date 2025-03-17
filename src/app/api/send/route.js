import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1351222167085383760/DkhLEoagIltVk5KQrC16J9DCBRtkmI_PjyDm4rMZt6KoP5nUowy_EXAJ1SFQ9Fnb74ye";

// ฟังก์ชันส่งข้อความไปยัง Discord webhook
async function sendDiscordNotification(formData) {
  const { name, email, subject, message } = formData;

  const payload = {
    embeds: [
      {
        title: "📬 มีข้อความใหม่จากเว็บไซต์ Portfolio",
        color: 3447003, // สีฟ้า
        fields: [
          {
            name: "👤 ชื่อ",
            value: name,
            inline: true,
          },
          {
            name: "📧 อีเมล",
            value: email,
            inline: true,
          },
          {
            name: "📝 หัวข้อ",
            value: subject,
          },
          {
            name: "💬 ข้อความ",
            value:
              message.length > 1000
                ? message.substring(0, 1000) + "..."
                : message,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Portfolio Website Contact Form",
        },
      },
    ],
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Discord notification error:", error);
    return false;
  }
}

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

    // ส่งอีเมลด้วย Resend เหมือนเดิม
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
            {/* ...email content (unchanged)... */}
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
            >
              {" "}
              Thank you for contacting us!😁{" "}
            </div>
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
                📨 Message Details
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

    // ส่งการแจ้งเตือนไปยัง Discord
    await sendDiscordNotification(body);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error processing email request:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
