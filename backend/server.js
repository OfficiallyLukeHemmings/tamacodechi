const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db")
const projectRoute = require("./routes/projectRoute");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());


connectDB();

// Routes
app.use(projectRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})