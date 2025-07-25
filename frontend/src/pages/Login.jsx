import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from "../utils/Axios";
import toast from "react-hot-toast"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful ✅"); 
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid email or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-green-100"
      >
        <div className="flex justify-center mb-6">
          <FaUserCircle className="text-green-600 text-6xl" />
        </div>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-md transition-transform transform hover:scale-[1.02] cursor-pointer"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-600 font-semibold hover:underline cursor-pointer">
            Sign up here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
