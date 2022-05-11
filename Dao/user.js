const crypto = require("crypto");
const { users } = require("../models/index");

async function findUserByEmail(email) {
  return await users.findOne({
    where: {
      email: email.toLowerCase(),
    },
  });
}

async function userFindByPhoneNumber(phoneNumber, countryCode) {
  return await users.findOne({
    where: {
      country_code: countryCode,
      phone_number: phoneNumber,
    },
  });
}

async function updateCodeByPhoneNumber(phoneNumber) {
  return await users.update(
    {
      sms_code: Math.floor(100000 + Math.random() * 900000),
    },
    {
      where: {
        phone_number: phoneNumber,
      },
    }
  );
}

async function userFindByPhoneNumberAndPwd(phoneNumber, countryCode, password) {
  return await users.findOne({
    where: {
      phone_number: phoneNumber,
      country_code: countryCode,
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

async function userFindByCodeForLogin(code, phoneNumber, countryCode) {
  return await users.findOne({
    where: {
      sms_code: code,
      phone_number: phoneNumber,
      sms_verified: false,
      country_code: countryCode,
    },
  });
}

async function userFindByCodeForReset(code, phoneNumber, countryCode) {
  return await users.findOne({
    where: {
      sms_code: code,
      phone_number: phoneNumber,
      sms_verified: true,
      country_code: countryCode,
    },
  });
}

async function smsCodeVerified(code, phoneNumber, countryCode) {
  return await users.update(
    {
      sms_verified: true,
    },
    {
      where: {
        sms_code: code,
        phone_number: phoneNumber,
        sms_verified: false,
        country_code: countryCode,
      },
    }
  );
}

async function updatePassword(password, user) {
  return await users.update(
    {
      password: password,
      confirm_password: password,
    },
    {
      where: {
        id: user.id,
        email: user.email,
        phone_number: user.phone_number,
        country_code: user.country_code,
      },
    }
  );
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
  updateCodeByPhoneNumber,
  userFindByResetToken,
  userFindByCodeForLogin,
  smsCodeVerified,
  userFindByCodeForReset,
  updatePassword,
};
