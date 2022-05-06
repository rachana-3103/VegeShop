const crypto = require("crypto");
const { users } = require("../models/index");

async function findUserByEmail(email) {
  return await users.findOne({
    where: {
      email: email.toLowerCase(),
    },
  });
}

async function userFindByPhoneNumber(phoneNumber){
  return await users.findOne({
    where: {
      phone_number: phoneNumber
    },
  });
}

async function updateResetTokensByPhoneNumber(resetToken, phoneNumber) {
  return await users.update({
    reset_token: resetToken,
  }, {
    where: {
      phone_number: phoneNumber,
    },
  });
}

async function userFindByPhoneNumberAndPwd(phoneNumber, password) {
  return await users.findOne({
    where: {
      phone_number: phoneNumber,
      password: password,
    },
  });
}

async function userFindByResetToken(token) {
  return await users.findOne({
    where: {
      reset_token: token,
    },
  });
}

async function findUserById(userId) {
  return users.findOne({
    where: {
      id: userId,
    },
    attributes: {
      exclude: ["password", "confirm_password"],
    },
  });
}

function passwordEncrypt(password) {
  const pwd = crypto.createHash("md5").update(password).digest("hex");
  return pwd;
}

module.exports = {
  findUserById,
  passwordEncrypt,
  findUserByEmail,
  userFindByPhoneNumberAndPwd,
  userFindByPhoneNumber,
  updateResetTokensByPhoneNumber,
  userFindByResetToken
};
