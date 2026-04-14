const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // අපේ .env ෆයිල් එක කියවන්න

const app = express();
const PORT = 5000;

app.use(express.json()); // අපිට JSON දත්ත තේරුම් ගන්න පුළුවන් වෙන්න

// දත්ත ගබඩාවට සම්බන්ධ වීම
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected! 🚀'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// අපේ අලුත් routes ටික සර්වර් එකට සම්බන්ධ කිරීම
app.use('/api/posts', require('./routes/posts'));

// සර්වර් එක ඔන් කරන එක
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});