const { encrypt, compare } = require("../services/bcrypt");
const { generateOTP } = require("../services/otp.js");
const { sendMail } = require("../services/mail");
const { storage } = require("../storage/storage");
const multer = require("multer");
const upload = multer({ storage });
const userModel = require("../models/User.model");

const createUser = async (name, email, password, username, profilePicture) => {
  const encryptedPwd = await encrypt(password);
  const otpGenerated = await generateOTP();
  const newUser = await userModel.create({
    username,
    profilePicture,
    email,
    name,
    password: encryptedPwd,
    otp: otpGenerated,
  });
  if (!newUser) {
    return [false, "Unable to sign you up"];
  }
  try {
    await sendMail({
      to: email,
      OTP: otpGenerated,
    });
    return [true, newUser];
  } catch (error) {
    return [false, "Unable to sign up because of mail error", error];
  }
};

const signUp =
  (upload.single("image"),
  async (req, res) => {
    console.log(req.file);
    const { email, password, username, profilePicture, name } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "user already exists" });
    }
    const newUser = await createUser(
      name,
      email,
      password,
      username,
      profilePicture
    );

    if (!newUser) {
      res.status(400).json({ message: "user not created" });
    } else {
      res.json({ data: newUser });
    }
  });

const validateSignUp = async (email, otp) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    return [false, "user not found"];
  }
  if (user && user.otp !== otp) {
    return [false, "Invalid OTP"];
  }
  const updatedUser = await userModel.findByIdAndUpdate(user._id, {
    activated: true,
  });
  return [true, updatedUser];
};

const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateSignUp(email, otp);
  res.json({ data: user });
};

const logout = async (req, res) => {
  const { otp } = req.body;
  const user = await userModel.findOne({ otp });

  if (!user) {
    res.status(400).json({ message: "invalid otp" });
  } else {
    const updatedUser = await userModel.findOneAndUpdate(
      { otp },
      { activated: false, otp: null }
    );
    res.status(200).json({ message: "signed out" });
  }
};

module.exports = { verifyEmail, signUp, logout };
