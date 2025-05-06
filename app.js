// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');

const fieldRoutes = require('./routes/field-route');
const buyerRoutes = require('./routes/buyer-route');
const sellerRoutes = require('./routes/seller-route');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/fields', fieldRoutes);
app.use('/api/buyers', buyerRoutes);
app.use('/api/sellers', sellerRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
