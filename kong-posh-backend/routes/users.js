const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/User'); // Make sure the path is correct
const router = express.Router();

// User signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
      

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword, // Store the hashed password
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// User login
router.post('/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  

  try {
      // Find the user by email
      const user = await User.findOne({ email });
     
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Compare the password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Successful login
      res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// Get all users
router.get('/', async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Add a new user
router.post('/', async (req, res) => {
  const { email, password, name } = req.body;

  const newUser = new User({
      email,
      password,
      name
  });

  try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


module.exports = router;
