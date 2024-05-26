import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const trelloAPIKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  let event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const { data, type: eventType } = event;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          data.object.id,
          {
            expand: ["line_items"],
          }
        );

        const customerId = session?.customer;
        if (!customerId) {
          console.error("No customer found for session ID:", data.object.id);
          throw new Error("No customer found");
        }

        const customer = await stripe.customers.retrieve(customerId);

        if (customer.email) {
          console.log(customer.email);
          let boardId;
          let card;
          let cardId;
          let emailData = {
            email: customer.email,
            name: "sddddsds",
            time: " ",
            details: " ",
            options: " ",
            emailType: "subscribed",
          };
          const trelloUrl = `https://api.trello.com/1/boards/?name=New%20Board%20Name&idBoardSource=6652095e774457f7030e3ca8&key=${trelloAPIKey}&token=${trelloToken}`;

          try {
            const trelloResponse = await fetch(trelloUrl, { method: "POST" });

            if (trelloResponse.ok) {
              const responseData = await trelloResponse.json();
              boardId = responseData.id;
              emailData.details = `https://trello.com/b/${boardId}`;
            } else {
              console.error(
                "Failed to create Trello board:",
                trelloResponse.statusText
              );
            }
          } catch (error) {
            console.error("Error creating Trello board:", error);
          }
          const url = `https://api.trello.com/1/boards/${boardId}/cards?key=${trelloAPIKey}&token=${trelloToken}`;

          try {
            const trelloResponse = await fetch(url);

            if (trelloResponse.ok) {
              const cards = await trelloResponse.json();
              card = cards.find((c) => c.name === "Manage your subscription📊");
              cardId = card.id;
            } else {
              console.error(
                "Failed to create Trello board:",
                trelloResponse.statusText
              );
            }
          } catch (error) {
            console.error("Error creating Trello board:", error);
          }
          try {
            const apiUrl = `https://api.trello.com/1/cards/${cardId}?key=${trelloAPIKey}&token=${trelloToken}`;

            const cardResponse = await fetch(apiUrl);

            const cardData = await cardResponse.json();
            const currentDescription = cardData.desc || "";

            // Update the card description with the new URL
            const updatedDescription = `${currentDescription}\n\n${
              "https://billing.stripe.com/p/login/test_28oaIy5FGgl8eTScMM" +
              "?prefilled_email=" +
              customer.email
            }`;

            const updateResponse = await fetch(apiUrl, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                desc: updatedDescription,
              }),
            });

            if (updateResponse.ok) {
              const updatedCard = await updateResponse.json();
              console.log(
                "Card description updated successfully:",
                updatedCard
              );
            } else {
              console.error(
                "Failed to update card description:",
                updateResponse.statusText
              );
              const errorData = await updateResponse.json();
              console.error("Error details:", errorData);
            }
          } catch (error) {
            console.error("Error creating Trello board:", error);
          }

          try {
            const emailResponse = await fetch(`${baseUrl}/api/send`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(emailData),
            });

            if (emailResponse.ok || emailResponse.status === 504) {
              console.log("CHECK EMAIL");
            } else {
              console.error("Failed to send email:", emailResponse.statusText);
              // Log error to monitoring system
            }
          } catch (error) {
            console.error("Error sending email:", error);
            // Log error to monitoring system
          }
        }
        break;
      }

      default:
        console.log("Unhandled event type:", eventType);
    }
  } catch (e) {
    console.error("Stripe error:", e.message, "| Event type:", eventType);
  }

  return NextResponse.json({});
}
