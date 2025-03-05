// routes/order.js
const express = require('express');
const Order = require('../model/Order'); // Adjust the path as necessary
const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders
    res.status(200).json(orders); // Return the orders
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// POST create a new order
router.post('/', async (req, res) => {
  const { name, phone, email, paymentMethod, items, totalAmount } = req.body;

  const order = new Order({
    name,
    phone,
    email,
    paymentMethod,
    items,
    totalAmount,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// DELETE delete an order by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
