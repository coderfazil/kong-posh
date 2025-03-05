
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

    const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admins');
app.use('/api/admins', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


// // Sample route
// app.get('/', (req, res) => {
//     res.send('Kong Posh Backend is running!');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
