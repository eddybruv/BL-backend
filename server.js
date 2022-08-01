const express = require("express");
const cors = require("cors");
const AuthRoute = require("./routes/auth.route");
const ImageRoute = require("./routes/image.route");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", AuthRoute);
// app.use("/api/image")

connectDB;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Running on port ${PORT}`);
});
