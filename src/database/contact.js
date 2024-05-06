import { addDoc, collection } from "firebase/firestore";

export async function sendMessage(
  database,
  guestName,
  guestEmail,
  guestMessage
) {
  let messagesCollection = collection(database, "messages");

  await addDoc(messagesCollection, {
    from: guestName,
    email: guestEmail,
    message: guestMessage,
    readed: 0,
  });
}
