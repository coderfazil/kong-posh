// routes/products.js
const express = require('express');
const Product = require('../model/Product');
const router = express.Router();
// Get all products
router.get('/', async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
    const { heading, category,id, imageUrl, details,dashedPrice, price } = req.body;

    const newProduct = new Product({
        heading,
        category,
        id,
        imageUrl,
        details,
        dashedPrice,
        price,
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Export the router
module.exports = router;