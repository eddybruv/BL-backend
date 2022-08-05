const uploader = async (req, res) => {
  if (!req.files) {
    console.log("No file received");
    return res.json({
      success: false,
      message: "no files uploaded",
    });
  } else {
    console.log("files received");
    let urls = [];
    for (let file of req.files) {
      urls.push({ name: file.originalname, url: file.path });
    }
    return res.send({
      success: true,
      data: urls,
    });
  }
};

module.exports = { uploader };
