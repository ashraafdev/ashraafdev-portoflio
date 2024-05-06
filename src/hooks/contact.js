import { useRef, useState } from "react";
import { sendMessage } from "../database/contact";

export function useContactMe(database) {
  const guestName = useRef(null);
  const guestEmail = useRef(null);
  const guestMessage = useRef(null);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const send = async () => {
    try {
      setStatus("sending");

      await sendMessage(
        database,
        guestName.current.value,
        guestEmail.current.value,
        guestMessage.current.value
      );

      setStatus("sended");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return [guestName, guestEmail, guestMessage, status, error, send];
}
