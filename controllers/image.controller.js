const { storage } = require("../storage/storage");
const multer = require("multer");
const upload = multer({ storage });

const uploader =
  (upload.single("image"),
  (req, res) => {
    console.log(req.file);
    res.send("Done");
  });

module.exports = { uploader };
