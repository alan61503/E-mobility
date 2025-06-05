const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON data

// Test route
app.get('/', (req, res) => {
  res.send("Backend is working! 🚀");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));