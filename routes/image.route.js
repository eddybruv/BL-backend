const router = require("express").Router();
const { uploader } = require("../controllers/image.controller");
const multer = require("multer");
const { storage } = require("../storage/storage");
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), uploader);

module.exports = router;
