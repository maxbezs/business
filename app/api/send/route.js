import { EmailTemplate } from "../../(site)/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    switch (body.emailType) {
      case "subscribed":
        console.log("SUBSCRIBED event received. Body:", body);
        try {
          // Validate inputs
          if (!body.email) {
            throw new Error("Email is missing in the body");
          }
          if (!body.details) {
            throw new Error("Details are missing in the body");
          }

          console.log("Sending email to:", body.email);

          const emailPayload = {
            from: "Max <max-bezs@max-bezs.com>",
            to: body.email,
            subject: `Hey max-bezs received your inquiry✨`,
            react: EmailTemplate({
              firstName: "dwdwdw",
              time: "2024-05-23T19:40:00.000Z",
              details: body.details,
              options: {
                webpage: [false, "Webpage"],
                webapp: [true, "Web app"],
                mobileapp: [true, "Mobile App"],
                nocode: [false, "No-Code"],
                api: [false, "API"],
                ecom: [false, "E-commerce"],
                other: [true, "Other"],
              },
            }),
          };

          console.log("Email payload:", emailPayload);

          const ffff = resend.emails.send(emailPayload);
          const [ffffResponse] = await Promise.all([ffff]);

          console.log("Email sent successfully. Response:", ffffResponse);

          return NextResponse.json({ ffffResponse });
        } catch (error) {
          console.error("Error in subscription handling:", error);
          return NextResponse.json({ error: error.message });
        }

      case "schedule_meeting":
        const recipientEmailData = resend.emails.send({
          from: "Max <max-bezs@max-bezs.com>",
          to: "max.bezsmertnyi@gmail.com",
          subject: `${body.name}, max-bezs received your inquiry✨`,
          react: EmailTemplate({
            firstName: body.name,
            time: body.time,
            details: body.details,
            options: body.options,
          }),
        });

        const senderEmailData = resend.emails.send({
          from: "Max <max-bezs@max-bezs.com>",
          to: body.email,
          subject: `${body.name}, max-bezs received your inquiry✨`,
          react: EmailTemplate({
            firstName: body.name,
            time: body.time,
            details: body.details,
            options: body.options,
          }),
        });

        // Wait for both email sends to complete
        const [recipientResponse, senderResponse] = await Promise.all([
          recipientEmailData,
          senderEmailData,
        ]);

        return NextResponse.json({ recipientResponse, senderResponse });

      default:
        throw new Error("Invalid email type");
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
