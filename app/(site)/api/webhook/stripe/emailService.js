import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function sendEmailNotification(emailData) {
  try {
    const emailResponse = await fetch(`${baseUrl}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!emailResponse.ok && emailResponse.status !== 504) {
      throw new Error("Failed to send email: " + emailResponse.statusText);
    }

    console.log("✅ Email notification sent for:", emailData.email);

    // Return success response when the email notification is sent successfully
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
