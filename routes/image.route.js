const router = require("express").Router();
const { uploader } = require("../controllers/image.controller");

router.post("/upload", uploader);

module.exports = router;
