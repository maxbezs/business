import { processCustomerEmail } from "./trelloService";
import { handleError } from "./error";
import Stripe from "stripe";

export async function handleCheckoutSessionCompleted(sessionId) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
    const customerId = session?.customer;

    if (!customerId) {
      throw new Error("No customer found for session ID:" + sessionId);
    }

    const customer = await stripe.customers.retrieve(customerId);
    if (customer.email) {
      await processCustomerEmail(customer.email, customer.name, "NEW BOARD");
    }
  } catch (err) {
    handleError(err);
  }
}
