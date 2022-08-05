require("dotenv").config();

const MAIL_SETTINGS = {
  service: "gmail",

  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendMail = async (params) => {
  console.log("here");
  try {
    let info = await transporter.sendMail({
      from: MAIL_SETTINGS.auth.pass,
      to: params.to,
      subject: "Hi there 😄",
      html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>BL.</h2>
        <h4>Welcome To BL✔</h4>
        <p style="margin-bottom: 30px;">Your OTP to get started🎉</p>
        <h1 style="font-size: 20px; letter-spacing: 2px;">${params.OTP}</h1>
        <p style="margin-top:50px;">If you did not request for verification please ignore the mail.</p>
      </div>
    `,
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { sendMail };
