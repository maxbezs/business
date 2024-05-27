import { handleError } from "./error";

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

    console.log("Email notification sent for:", emailData.email);
  } catch (err) {
    handleError(err);
  }
}
