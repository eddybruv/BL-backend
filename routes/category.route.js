const router = require("express").Router();
const {createCategory, getCategory, updateCategory, deleteCategory} = require("../controllers/category.controller");
const protect = require("../middleware/authMiddleware");
const multer = require("multer");
const { storage } = require("../storage/storage");
const upload = multer({ storage: storage });

router.post("/create", upload.single("image"), protect, createCategory);
router.get("/get", protect, getCategory);
router.put("/update/:id", upload.single("image"), protect, updateCategory);
router.delete("/delete/:id", protect, deleteCategory);

module.exports = router;