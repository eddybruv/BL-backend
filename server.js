const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require("./docs/options");
const specs = swaggerJsDoc(options);

// api routes
const AuthRoute = require("./routes/auth.route");
const ImageRoute = require("./routes/image.route");
const CategoryRoute = require("./routes/category.route");

const { connectDB } = require("./config/db");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", AuthRoute);
app.use("/api/image", ImageRoute);
app.use("/api/category", CategoryRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

connectDB;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Running on port ${PORT}`);
});
