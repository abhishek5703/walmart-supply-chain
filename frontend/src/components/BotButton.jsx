import React from "react";
import { FaRobot } from "react-icons/fa";

const BotButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
    aria-label="Open Bot"
  >
    <FaRobot className="text-2xl" />
  </button>
);

export default BotButton; 