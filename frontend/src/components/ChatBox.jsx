import React from "react";

const ChatBox = ({ onClose }) => (
  <div className="fixed bottom-28 right-8 z-50 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
    <div className="flex items-center justify-between bg-green-600 text-white px-4 py-2">
      <span className="font-bold">AI Chat</span>
      <button onClick={onClose} className="text-white text-lg font-bold hover:text-gray-200">×</button>
    </div>
    <div className="flex-1 p-4 text-gray-700 text-sm" style={{ minHeight: '120px' }}>
      <p>Hello! How can I help you today?</p>
      {/* Future: Add chat messages here */}
    </div>
    {/* Future: Add input box here */}
  </div>
);

export default ChatBox; 