import { EmailTemplate } from "../../(site)/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_7JywbWpC_5M8ZWZWm7yNf8xUHHDzReEP9");

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, time, details, options } = body;
    const data = await resend.emails.send({
      from: "Max <max-bezs@max-bezs.com>",
      to: [email],
      subject: name + ", max-bezs received your inquiry✨",
      react: EmailTemplate({
        firstName: name,
        time: time,
        details: details,
        options: options,
      }),
    });
    const data2 = await resend.emails.send({
      from: "Max <max-bezs@max-bezs.com>",
      to: "max.bezsmertnyi@gmail.com",
      subject: name + ", max-bezs received your inquiry✨",
      react: EmailTemplate({
        firstName: name,
        time: time,
        details: details,
        options: options,
      }),
    });

    return NextResponse.json(data, data2);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
