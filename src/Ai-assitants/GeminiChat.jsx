import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // store API key in .env

const GeminiChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello 👋 I’m your farming assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);

      setMessages([
        ...newMessages,
        { role: "assistant", text: result.response.text() },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { role: "assistant", text: "⚠️ Error connecting to Gemini." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-green-200 w-full max-w-lg h-[80vh] rounded-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-white text-black p-4 rounded-t-2xl flex justify-between items-center">
          <h2 className="font-bold">🌾 AI Assistant</h2>
          <button onClick={onClose} className="text-lg font-bold">✖</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-green-700 self-end ml-auto"
                  : "bg-blue-500 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-2 text-black bg-white">
            
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
          />
          <button
            onClick={handleSend}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;
