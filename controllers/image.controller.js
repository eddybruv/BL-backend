const uploader = async (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false,
    });
  } else {
    console.log("file received");
    return res.send({
      success: true,
      data: req.file,
    });
  }
};

module.exports = { uploader };
