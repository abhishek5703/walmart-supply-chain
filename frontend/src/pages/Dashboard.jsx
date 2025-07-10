import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaTags, FaPlus, FaUpload } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      price: form.price,
      image: imagePreview,
    };
    setProducts([newProduct, ...products]);
    setForm({ name: "", description: "", price: "", image: "" });
    setImagePreview(null);
  };

  const handleAIAnalysis = (product) => {
    alert(`AI analyzing: Best seller for ${product.name}...`);
    // Future: integrate actual ML recommendation logic here
  };

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
          Add, view, and analyze your products using AI-driven insights.
        </p>
      </motion.div>

      <div className="mb-10">
        <form onSubmit={handleAddProduct} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaPlus /> Add New Product
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-xl" />
          )}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition"
          >
            <FaUpload className="inline mr-2" /> Upload Product
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
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
              <div className="flex items-center text-green-700 font-semibold text-sm gap-2 mb-2">
                <FaTags /> ₹{product.price}
              </div>
              {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
              )}
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t">
              <button
                onClick={() => handleAIAnalysis(product)}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
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
