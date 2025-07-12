const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "Image upload failed or missing" });
    }

    const image = req.file.path;

    const product = new Product({
      name,
      image,
      description,
      price,
      stock,
      seller: req.user.id, 
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error("Add product error:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('seller', 'name email');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.seller.toString() !== req.user.id) { // ✅ fixed here
      return res.status(403).json({ message: "Unauthorized to delete this product" });
    }

    await product.deleteOne();
    res.json({ message: "Product deleted successfully", id: req.params.id });
  } catch (err) {
    console.error("Delete product error:", err);
    res.status(500).json({ message: err.message });
  }
};
