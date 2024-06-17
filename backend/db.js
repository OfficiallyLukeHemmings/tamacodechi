const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = () => {
  mongoose
    .connect(URI)
      .then(() => console.log("DB connected"))
      .catch(console.error);
}

module.exports = connectDB;