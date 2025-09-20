import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const GeminiChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello 👋 I’m your farming assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 w-full max-w-lg h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 flex justify-between items-center shadow-md">
          <h2 className="font-bold text-lg">🌾 AI Farming Assistant</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-red-300 transition"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow-md max-w-[75%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-green-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/80 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 border text-black border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about farming..."
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;
