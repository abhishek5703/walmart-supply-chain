// src/pages/SellerProfile.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const dummyReviews = [
    { name: "Rahul Sharma", comment: "Very reliable seller. Fast shipping!", rating: 5 },
    { name: "Sneha Patil", comment: "Good quality products. Will buy again.", rating: 4 },
    { name: "Vikram Desai", comment: "Okay service but needs improvement.", rating: 3 },
];

const SellerProfile = () => {
    const { state } = useLocation();
    const seller = state?.seller;

    if (!seller) return <p className="p-10 text-red-500">No seller data found.</p>;

    const pieData = [
        { name: "Positive", value: seller.rating * 20 },
        { name: "Negative", value: 100 - seller.rating * 20 },
    ];

    const barData = [
        { name: "2021", sales: seller.productsSold - 100 },
        { name: "2022", sales: seller.productsSold - 30 },
        { name: "2023", sales: seller.productsSold },
    ];

    const COLORS = ["#4ade80", "#f87171"];
    const phoneNumber = "+919999999999"; // You can dynamically attach seller.phone if available

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
                {seller.name}'s Profile
            </h1>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Seller Info */}
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200 space-y-2">
                    <h2 className="text-2xl font-semibold text-green-700">{seller.name}</h2>
                    <p className="text-gray-600">📍 {seller.location}</p>
                    <p className="text-gray-600">⭐ {seller.rating} rating</p>
                    <p className="text-gray-600">📦 {seller.productsSold} products sold</p>
                    <p className="text-gray-600">📛 Badge: {seller.badge}</p>
                    <p className="text-gray-600">📧 {seller.contact}</p>

                    <div className="flex gap-4 pt-4">
                        <a
                            href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600"
                        >
                            <FaPhoneAlt /> Call Now
                        </a>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Customer Sentiment</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie data={pieData} dataKey="value" outerRadius={80} label>
                                {pieData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mb-10">
                <h3 className="text-lg font-semibold mb-4">📈 Yearly Sales Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#10b981" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Seller Performance Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
                    <h4 className="text-xl font-semibold text-green-700 mb-1">🚚 Avg. Delivery</h4>
                    <p className="text-gray-700 text-2xl font-bold">2.3 days</p>
                    <p className="text-sm text-gray-500">Fast & reliable shipping</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
                    <h4 className="text-xl font-semibold text-yellow-600 mb-1">🔁 Return Rate</h4>
                    <p className="text-gray-700 text-2xl font-bold">3.1%</p>
                    <p className="text-sm text-gray-500">Low return frequency</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
                    <h4 className="text-xl font-semibold text-blue-600 mb-1">✅ Fulfillment Rate</h4>
                    <p className="text-gray-700 text-2xl font-bold">98%</p>
                    <p className="text-sm text-gray-500">Orders fulfilled successfully</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
                    <h4 className="text-xl font-semibold text-purple-600 mb-1">🛠️ Support</h4>
                    <p className="text-gray-700 text-2xl font-bold">1.2 hrs</p>
                    <p className="text-sm text-gray-500">Avg. response time</p>
                </div>
            </div>


            {/* Reviews */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200 mb-10">
                <h3 className="text-lg font-semibold mb-4">🗣️ Customer Reviews</h3>
                {dummyReviews.map((review, i) => (
                    <div key={i} className="mb-4 border-b pb-2">
                        <p className="font-semibold text-green-800">{review.name}</p>
                        <p className="text-sm text-gray-600 italic">"{review.comment}"</p>
                        <p className="text-yellow-500 text-sm">Rating: {review.rating} ⭐</p>
                    </div>
                ))}
            </div>

            {/* Final Recommendation */}
            <div className="bg-green-100 border-l-4 border-green-500 text-green-900 p-6 rounded-md">
                <h4 className="text-lg font-bold mb-2">📌 When to choose this seller?</h4>
                <p className="text-sm">
                    Choose <strong>{seller.name}</strong> when you’re looking for a highly rated vendor with
                    consistent yearly performance and a large product base. Especially ideal for bulk orders,
                    timely delivery, and trustworthy after-sales support.
                </p>
            </div>
        </div>
    );
};

export default SellerProfile;
