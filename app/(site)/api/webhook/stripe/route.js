import { NextResponse } from "next/server";
import { handleCheckoutSessionCompleted } from "./stripeHandlers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");

  try {
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET_TEST
    );
    const { data, type: eventType } = event;

    switch (eventType) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(data.object.id);
        break;

      // More cases here for other event types: https://docs.stripe.com/api/events/types
      default:
        console.log("Unhandled event type:", eventType);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
