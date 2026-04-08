import { useState } from "react";

const initialMessages = [
  { role: "bot", text: "Hi there! I’m your AI portfolio assistant. Ask me about the site, projects, or how I can help build your next product." },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input.trim() };
    setMessages((current) => [...current, userMessage]);
    setInput("");

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text:
            "Thanks for your message! I can help you explore the portfolio, suggest project ideas, or describe how a custom website launch would look.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-title">AI Portfolio Assistant</p>
              <p className="chatbot-subtitle">Ask anything about the site or next steps.</p>
            </div>
            <button className="chatbot-button" type="button" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.role === "user" ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input-group" onSubmit={handleSubmit}>
            <input
              className="chatbot-input"
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className="chatbot-footer">
              <button className="btn btn-primary chatbot-submit" type="submit">
                Send
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setInput("")}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      )}

      <button className="chatbot-button" type="button" onClick={() => setOpen((prev) => !prev)}>
        {open ? "💬" : "🤖"}
      </button>
    </div>
  );
}
