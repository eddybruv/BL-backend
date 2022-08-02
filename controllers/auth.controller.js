const { encrypt, compare } = require("../services/bcrypt");
const { generateOTP } = require("../services/otp.js");
const { sendMail } = require("../services/mail");
const { storage } = require("../storage/storage");
const generateToken = require("../config/generateToken");
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
    return newUser;
  } catch (error) {
    return [false, "Unable to sign up because of mail error", error];
  }
};

const signUp = async (req, res) => {
  const imagePath = await req.file?.path;
  const { email, password, username, name } = req.body;
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "user already exists" });
  }
  const newUser = await createUser(name, email, password, username, imagePath);

  if (!newUser) {
    res.status(400).json({ message: "user not created" });
  } else {
    let token = generateToken(newUser._id);
    res.json({ data: newUser, token });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.json({ message: "user not found" }).status(400);
  }

  if (compare(password, user.password)) {
    let token = generateToken(user._id);
    return res.json({ data: user, token }).status(200);
  } else {
    return res.json({ message: "credentials don't match" }).status(400);
  }
};

const logout = async (req, res) => {
  const _id = req.userId;
  const user = await userModel.findById({ _id });

  if (!user) {
    res.status(400).json({ message: "user not found" });
  } else {
    const updatedUser = await userModel.findByIdAndUpdate(
      { _id },
      { isActive: false, otp: null }
    );
    res.status(200).json({ message: "signed out" });
  }
};

const validateSignUp = async (email, otp) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    return [false, "user not found"];
  }
  if (user && user.otp !== otp) {
    return [false, "One time password doesn't match"];
  }
  const updatedUser = await userModel.findByIdAndUpdate(user._id, {
    activated: true,
  });
  return updatedUser;
};

const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateSignUp(email, otp);
  res.json({ data: user });
};

module.exports = { verifyEmail, signUp, logout, login };
