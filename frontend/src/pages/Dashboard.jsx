import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaTags, FaPlus, FaUpload, FaTrash } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import Axios from "../utils/Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await Axios.get("/products");
        setProducts(res.data);
      } catch (err) {
        toast.error("Failed to fetch products");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("image", form.image);

    try {
      const res = await Axios.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const newProduct = res.data.product || res.data;
      setProducts([newProduct, ...products]);
      setForm({ name: "", description: "", price: "", stock: "", image: "" });
      setImagePreview(null);
      toast.success("Product uploaded successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add product");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await Axios.delete(`/products/${productId}`);
      setProducts(products.filter((p) => p._id !== productId));
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error("Failed to delete product");
    }
  };

  const handleAIAnalysis = (product) => {
    navigate("/sellers", { state: { productName: product.name } });
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

      {/* Add Product Form */}
      <div className="mb-12">
        <form
          onSubmit={handleAddProduct}
          className="bg-white rounded-2xl shadow-md p-6 space-y-4"
        >
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
            type="number"
            name="stock"
            placeholder="Product Stock"
            value={form.stock}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex items-center gap-4">
            <label
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm font-medium text-gray-700 transition"
            >
              📷 Choose Image
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            <span className="text-sm text-gray-500">
              {form.image ? form.image.name : "No file chosen"}
            </span>
          </div>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-xl"
            />
          )}
          <button
            type="submit"
            disabled={uploading}
            className={` cursor-pointer flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-bold transition ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {uploading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <FaUpload className="inline " /> Upload Product
              </>
            )}
          </button>
        </form>
      </div>

      {/* Product List */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">🍭 All Products</h2>

      {loading ? (
        <p className="text-center text-gray-500 text-sm">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-sm">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-md transform transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-green-500 overflow-hidden"
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {product.image && (
                <div className="relative overflow-hidden rounded-t-2xl h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaWarehouse className="text-green-500 text-xl" />
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">
                    {product.name || "Unnamed Product"}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1 text-green-700 font-semibold">
                    <FaTags /> ₹{product.price}
                  </div>
                  <div className="text-xs text-gray-500">Stock: {product.stock}</div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t space-y-2">
                <button
                  onClick={() => handleAIAnalysis(product)}
                  className=" cursor-pointer w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                >
                  <MdRecommend className="text-lg" /> Get Seller Recommendation
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer"
                >
                  <FaTrash className="text-sm" /> Delete Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
