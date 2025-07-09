const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { description, price, stock } = req.body;
    const image = req.file.path;
    const product = new Product({
      image,
      description,
      price,
      seller: req.userId,
      stock
    });
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
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
