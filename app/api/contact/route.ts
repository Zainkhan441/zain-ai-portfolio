import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Wire this up to your email provider of choice (Resend, Postmark, SendGrid,
    // or a direct SMTP transport) to deliver submissions to your inbox.
    // Example with Resend:
    //
    // await resend.emails.send({
    //   from: "Portfolio <notifications@yourdomain.com>",
    //   to: "helllo2455@gmail.com",
    //   subject: `New project inquiry — ${name}`,
    //   text: `${name} (${email})\nProject type: ${projectType}\n\n${message}`,
    // });

    console.log("New contact form submission:", {
      name,
      email,
      projectType,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
