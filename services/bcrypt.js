const bcrypt = require("bcrypt");
const saltRounds = 12;

const encrypt = async (password) => {
  try {
    if (password === undefined) {
      console.log("not defined");
      return false;
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPwd = await bcrypt.hash(password, salt);
    return encryptedPwd;
  } catch (up) {
    throw up;
  }
};

const compare = async (password, encryptedPwd) => {
  if ((!password || !encryptedPwd)) return false;
  const value = await bcrypt.compare(password, encryptedPwd);
  return value;
};

module.exports = { compare, encrypt };
