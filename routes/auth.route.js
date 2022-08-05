const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const multer = require("multer");
const { storage } = require("../storage/storage");
const upload = multer({ storage: storage });

const {
  signUp,
  verifyEmail,
  logout,
  login,
} = require("../controllers/auth.controller");

router.post("/register", upload.single("image"), signUp);
router.post("/login", login);
router.post("/verify", verifyEmail);
router.post("/logout", protect, logout);

module.exports = router;
