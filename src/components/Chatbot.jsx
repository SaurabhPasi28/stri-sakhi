"use client";
import React, { useState } from 'react';
import { FaMicrophone, FaTimes } from 'react-icons/fa';
const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon */}
      {!isChatOpen && (
        <div
          className="w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center cursor-pointer pulse"
          onClick={toggleChat}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://e7.pngegg.com/pngimages/191/906/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail.png"
              alt="Chatbot"
              className="object-contain w-90% h-90%"
            />
          </div>
        </div>
      )}


      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-[30rem] bg-white shadow-lg rounded-lg flex flex-col justify-between z-50">
          <div className="flex items-center bg-blue-500 text-white p-3 rounded-t-lg">
            <img
              src="https://e7.pngegg.com/pngimages/191/906/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail.png"
              alt="Chatbot"
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-lg font-bold">Stree Sakhi Assistant</p>
            <FaTimes
              className="ml-auto text-lg cursor-pointer"
              onClick={toggleChat}
            />
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>
          <div className="flex items-center p-3 border-t border-gray-300">
            <input
              type="text"
              className="flex-grow p-2 rounded-full border border-gray-300 outline-none"
              placeholder="Type a message..."
            />
            <button className="ml-3 w-10 h-10 rounded-full bg-blue-500 text-white flex justify-center items-center">
              <FaMicrophone />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
