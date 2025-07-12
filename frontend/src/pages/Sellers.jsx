// src/pages/Sellers.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const dummySellers = [
  { id: 1, name: "Aman Traders", rating: 4.8, productsSold: 1250, location: "Delhi", contact: "aman@traders.com", badge: "Top Rated" },
  { id: 2, name: "BrightMart", rating: 4.5, productsSold: 900, location: "Mumbai", contact: "contact@brightmart.in", badge: "Trusted Seller" },
  { id: 3, name: "Global Goods", rating: 4.2, productsSold: 1100, location: "Chennai", contact: "support@globalgoods.com", badge: "Verified" },
  { id: 4, name: "Retail Kings", rating: 4.7, productsSold: 980, location: "Bangalore", contact: "info@retailkings.co", badge: "Top Rated" },
  { id: 5, name: "NextGen Supplies", rating: 4.6, productsSold: 1050, location: "Hyderabad", contact: "sales@nextgensupplies.com", badge: "Trusted Seller" },
  { id: 6, name: "ElectroHub", rating: 4.4, productsSold: 860, location: "Pune", contact: "hello@electrohub.io", badge: "Verified" },
  { id: 7, name: "ValueBazaar", rating: 4.3, productsSold: 910, location: "Kolkata", contact: "service@valuebazaar.com", badge: "Top Rated" },
  { id: 8, name: "Skyline Deals", rating: 4.1, productsSold: 870, location: "Ahmedabad", contact: "care@skylinedeals.in", badge: "Verified" },
];



const Sellers = () => {
  const { state } = useLocation();
  const [shuffledSellers, setShuffledSellers] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = [...dummySellers].sort(() => 0.5 - Math.random());
    setShuffledSellers(shuffled);
  }, []);

  const filteredSellers =
    filter === "All"
      ? shuffledSellers
      : shuffledSellers.filter((s) => s.badge.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        👔 Recommended Sellers for "{state?.productName}"
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {['All', 'Top Rated', 'Verified', 'Trusted Seller'].map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={`px-4 py-2  cursor-pointer rounded-full text-sm font-medium border transition ${
              filter === label
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Sellers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSellers.map((seller, index) => (
          <motion.div
            key={seller.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition relative"
          >
            <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
              {seller.badge}
            </span>
            <h2 className="text-xl font-bold text-green-700 mb-1">
              {index + 1}. {seller.name}
            </h2>
            <p className="text-gray-600 text-sm mb-1">📍 {seller.location}</p>
            <p className="text-gray-600 text-sm mb-1">⭐ {seller.rating} rating</p>
            <p className="text-gray-600 text-sm mb-3">📦 {seller.productsSold} products sold</p>

            <div className="flex gap-3 mt-4">
              <a
                href={`mailto:${seller.contact}`}
                className="flex items-center gap-2 text-sm text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full"
              >
                <FaEnvelope /> Email Seller
              </a>
              <button
                onClick={() => navigate(`/seller/${seller.id}`, { state: { seller } })}
                className="text-sm text-green-600 hover:underline cursor-pointer"
              >
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;