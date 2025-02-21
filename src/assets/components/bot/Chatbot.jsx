import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";


const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg border-2 border-teal-700 dark:border-blue-500 ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
  />
);

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Bonjour ! Vous avez besoin des renseignements supplémentaires sur l'ONG SEED ?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("bg-gradient-to-tl", "from-blue-950", "via-transparent", "to-red-950", "dark:bg-black");
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.classList.remove("bg-gradient-to-tl", "from-blue-950", "via-transparent", "to-red-950", "dark:bg-black");
      document.body.style.overflowY = "auto";
    };
  }, []);

  // Scroll vers le dernier message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: input },
      { type: "bot", text: "Merci pour votre message ! Je serais bientôt capable de répondre aux questions sur l'ONG SEED." },
    ]);

    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full relative p-4">
      {/* OPTIMISATION SEO */}
      <SEO 
      title="ChatBot | ONG SEED" 
      description="Echangez avec notre ChatBot pour en savoir plus sur notre ONG." 
      keywords="ONG SEED, ChatBot, Informations, Intelligence artificielle, IA" 
      />
      {/* OPTIMISATION SEO */}

      {/* Bouton Quitter */}
      <Link to="/" className="fixed top-2 right-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 z-50">
        X
      </Link>

      {/* Conteneur du Chatbot - Toujours Centré */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Card className="w-full max-w-6xl h-[90vh] max-h-[650px] flex flex-col shadow-2xl rounded-2xl dark:bg-gray-900 dark:text-white overflow-hidden self-center">
          {/* En-tête */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center space-x-2">
              <FaComments className="text-blue-600 dark:text-teal-600" size={24} />
              <h1 className="text-xl font-bold">SEED Chatbot</h1>
            </div>
          </div>

          {/* Messages avec scroll */}
          <div className="flex-1 space-y-3 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex ${message.type === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`${
                    message.type === "bot" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white" : "bg-blue-600 text-white"
                  } p-3 rounded-2xl max-w-[75%] shadow-md break-words`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
            {/* Référence pour auto-scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Champ d'entrée */}
          <div className="flex items-center space-x-2 p-4 dark:text-black">
            <Input
              className="flex-1"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-teal-600">
              <FaPaperPlane className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
