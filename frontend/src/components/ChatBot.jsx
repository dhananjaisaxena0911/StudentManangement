import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 cursor-pointer shadow-lg hover:bg-blue-600 transition"
        onClick={toggleChat}
      >
        💬
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-between items-center bg-blue-500 text-white rounded-t-lg p-2">
            <h3 className="font-semibold">Chat with us!</h3>
            <button className="text-red-600" onClick={toggleChat}>
              <IoMdClose />
            </button>
          </div>
          <div className="p-2 max-h-60 overflow-y-auto">
            <p>Hello! How can I help you today?</p>
            {/* Add more chat messages or input here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
