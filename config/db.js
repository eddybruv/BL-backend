const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("🫙 [Database]: Up and Running");
  })
  .catch(() => console.log("🥲[Database]: Not connected"));

module.exports = connectDB;
