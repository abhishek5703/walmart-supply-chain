import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-green-100"
      >
        <div className="flex justify-center mb-6">
          <FaUserPlus className="text-green-600 text-6xl" />
        </div>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-md transition-transform transform hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <a href="/login" className="text-green-600 font-semibold hover:underline">Log in here</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
