const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');

const upload = multer({ storage });

router.post('/', auth, upload.single('image'), productController.addProduct);
router.get('/', productController.fetchProducts);

module.exports = router;
