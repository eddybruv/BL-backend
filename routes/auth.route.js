const router = require("express").Router();

const {
  signUp,
  verifyEmail,
  logout,
} = require("../controllers/auth.controller");

router.post("/register", signUp);
router.post("/verify", verifyEmail);

module.exports = router
