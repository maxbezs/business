import { NextResponse } from "next/server";
import { processCustomerEmail } from "./trelloService";
import Stripe from "stripe";

export async function handleCheckoutSessionCompleted(sessionId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
    const customerId = session?.customer;
    const customField = session?.custom_fields[0].text.value;
    if (!customerId) {
      throw new Error("No customer found for session ID:" + sessionId);
    }

    const customer = await stripe.customers.retrieve(customerId);
    if (customer.email) {
      await processCustomerEmail(customer.email, customer.name, customField);
    }

    console.log(
      "✅ Checkout session completed successfully for customer:",
      customer.email
    );

    // Return success response when the checkout session is completed successfully
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
