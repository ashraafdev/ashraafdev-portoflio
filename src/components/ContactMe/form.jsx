import { useContactMe } from "../../hooks/contact";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const { database } = useContext(AppContext);
  const [toastId, setToastId] = useState(null);
  const [guestName, guestEmail, guestMessage, status, error, send] =
    useContactMe(database);

  const sendMessage = async (event) => {
    event.preventDefault();
    send();
  };

  useEffect(() => {
    console.log(status);
    if (toastId) toast.dismiss(toastId);

    if (status == "sending") {
      const sendingToast = toast.loading("Sending Your Message...");
      setToastId(sendingToast);
    }

    if (status == "sended") {
      const sendedToast = toast.success("Your Message has been sended!");
      setToastId(sendedToast);
    }
  }, [status]);

  useEffect(() => {
    if (toastId) toast.dismiss(toastId);

    if (error) {
      const errorToast = toast.error(error);
      setToastId(errorToast);
    }
  }, [error]);

  return (
    <form onSubmit={sendMessage} className="flex flex-col gap-5 w-full h-full">
      <input
        ref={guestName}
        placeholder="Your Name"
        type="text"
        className="block w-full p-4 border rounded-lg text-md bg-slate-100 dark:bg-gray-700 dark:border-gray-600 border-gray-100 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-100 dark:focus:border-blue-500"
        required
      />
      <input
        ref={guestEmail}
        placeholder="Your E-Mail"
        type="email"
        className="block w-full p-4 border rounded-lg text-md bg-slate-100 dark:bg-gray-700 dark:border-gray-600 border-gray-100 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-100 dark:focus:border-blue-500"
        required
      />
      <textarea
        ref={guestMessage}
        placeholder="Your Message"
        rows={5}
        type="text"
        className="block w-full p-4 border rounded-lg text-md bg-slate-100 dark:bg-gray-700 dark:border-gray-600 border-gray-100 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-100 dark:focus:border-blue-500"
        required
      ></textarea>
      <button
        type="submit"
        className="text-white font-semibold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 bg-green-600 border-gray-100 hover:bg-green-700 focus:ring-green-800"
      >
        Send
      </button>
    </form>
  );
}
