const express = require('express');
const cors = require('cors');
require('dotenv').config()

const connectDB = require("./db.js")

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})