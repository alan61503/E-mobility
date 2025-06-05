
require('dotenv').config(); // Load .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas!"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err.message));

// Basic route
app.get('/', (req, res) => {
  res.send("Backend + Atlas are working! 🎉");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});