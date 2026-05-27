import React, { useState } from "react";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const initialMessages: Message[] = [
  { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
];

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thanks for your message! I am here to help.",
        },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <div className="w-[360px] max-w-full rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/5 ring-1 ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <div className="flex items-center justify-between rounded-t-3xl bg-slate-900 px-4 py-3 text-white dark:bg-slate-800">
          <div>
            <h3 className="text-sm font-semibold">Chat Support</h3>
            <p className="text-xs text-slate-300">Ask a question or request help</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-slate-700 px-2 py-1 text-sm text-slate-200 transition hover:bg-slate-600"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {isOpen && (
          <div className="flex h-[340px] flex-col px-4 py-3">
            <div className="mb-3 flex-1 space-y-3 overflow-y-auto pr-2 text-sm text-slate-700 dark:text-slate-200">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-2xl px-3 py-2 ${
                    message.sender === "user"
                      ? "ml-auto bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                      : "mr-auto bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100"
                  } max-w-[85%]`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendMessage();
                }}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-600 dark:focus:ring-slate-700"
                placeholder="Type a message..."
              />
              <button
                type="button"
                onClick={sendMessage}
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
