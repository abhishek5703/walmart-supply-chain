const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');

const upload = multer({ storage });

// Create a product
router.post('/', auth, upload.single('image'), productController.addProduct);

// Fetch all products
router.get('/', productController.fetchProducts);

// Delete a product
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
