import { sendEmailNotification } from "./emailService";
import { handleError } from "./error";

const trelloAPIKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;

export async function processCustomerEmail(email, name, boardName) {
  let emailData = {
    email,
    name,
    boardName,
    boardUrl: "",
    emailType: "subscribed",
  };

  try {
    const boardId = await createTrelloBoard();
    if (boardId) {
      emailData.boardUrl = `https://trello.com/b/${boardId}`;
      const cardId = await findTrelloCard(boardId);

      if (cardId) {
        await updateTrelloCardDescription(cardId, email);
        await sendEmailNotification(emailData);
      }
    }
  } catch (err) {
    handleError(err);
  }
}

async function createTrelloBoard() {
  try {
    const trelloUrl = `https://api.trello.com/1/boards/?name=${boardName}&idBoardSource=6652095e774457f7030e3ca8&key=${trelloAPIKey}&token=${trelloToken}`;
    const response = await fetch(trelloUrl, { method: "POST" });
    if (!response.ok) {
      throw new Error("Failed to create Trello board: " + response.statusText);
    }
    const data = await response.json();
    return data.id;
  } catch (err) {
    handleError(err);
  }
}

async function findTrelloCard(boardId) {
  try {
    const url = `https://api.trello.com/1/boards/${boardId}/cards?key=${trelloAPIKey}&token=${trelloToken}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to find Trello card id: " + response.statusText);
    }

    const cards = await response.json();
    const card = cards.find((c) => c.name === "Manage your subscription📊");
    return card.id;
  } catch (err) {
    handleError(err);
  }
}

async function updateTrelloCardDescription(cardId, email) {
  try {
    const apiUrl = `https://api.trello.com/1/cards/${cardId}?key=${trelloAPIKey}&token=${trelloToken}`;
    const cardResponse = await fetch(apiUrl);
    const cardData = await cardResponse.json();
    const currentDescription = cardData.desc || "";

    const updatedDescription = `${currentDescription}\n\n[Subscription panel login](https://billing.stripe.com/p/login/00geVD2eg0CV7MkcMM?prefilled_email=${email}"‌")`;
    const updateResponse = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc: updatedDescription }),
    });

    if (!updateResponse.ok) {
      throw new Error(
        "Failed to update card description: " + updateResponse.statusText
      );
    }
    console.log("Card description updated successfully for:", email);
  } catch (err) {
    handleError(err);
  }
}
