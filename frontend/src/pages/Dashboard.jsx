import React from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaTags } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";

const dummyProducts = [
  { id: 1, name: "Product A", description: "High-quality A", price: 100 },
  { id: 2, name: "Product B", description: "Reliable B", price: 200 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 md:px-20 py-14">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          📦 Product Dashboard
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Track, analyze, and make smart purchasing decisions with AI-powered suggestions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProducts.map((product, i) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-200 hover:border-green-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaWarehouse className="text-green-500 text-xl" />
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">
                  {product.name}
                </h2>
              </div>
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                {product.description}
              </p>
              <div className="flex items-center text-green-700 font-semibold text-sm gap-2">
                <FaTags /> ₹{product.price}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t">
              <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                <MdRecommend className="text-lg" /> Get Seller Recommendation
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
