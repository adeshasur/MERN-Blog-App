const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // අපේ .env ෆයිල් එක කියවන්න

const app = express();
const PORT = 5000;

// දත්ත ගබඩාවට සම්බන්ධ වීම
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected! 🚀'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// අපේ සර්වර් එකේ පණිවිඩය
app.get('/', (req, res) => {
    res.send('සර්වර් එක සහ දත්ත ගබඩාව සුපිරියට වැඩ!');
});

// සර්වර් එක ඔන් කරන එක
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});