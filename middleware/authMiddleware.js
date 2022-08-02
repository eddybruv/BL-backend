const jwt = require("jsonwebtoken");
const userModel = require("../models/User.model");
require("dotenv").config();

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = await req.headers.authorization?.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;
