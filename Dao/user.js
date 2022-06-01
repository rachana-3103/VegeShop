const crypto = require("crypto");
const { users } = require("../models/index");
const moment = require("moment");

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

async function usercheckCodeVerifed(phoneNumber, countryCode) {
  return await users.findOne({
    where: {
      country_code: countryCode,
      phone_number: phoneNumber,
      sms_verified: false,
    },
  });
}

async function updateCodeByPhoneNumber(code, countryCode, phoneNumber) {
  return await users.update(
    {
      sms_code: code,
      otp_generated_at: moment().format("YYYY-MM-DDTHH:mm"),
    },
    {
      where: {
        country_code: countryCode,
        phone_number: phoneNumber,
      },
    }
  );
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

async function userCodeVerifyById(code, userId) {
  return await users.findOne({
    where: {
      id: userId,
      sms_code: code,
      sms_verified: true,
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

async function removeOTP(id) {
  return await users.update(
    {
      sms_code: null,
      otp_generated_at: null,
    },
    {
      where: {
        id,
        sms_verified: true,
      },
    }
  );
}

async function updatePassword(password, user) {
  return await users.update(
    {
      password: password,
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
      exclude: ["password", "sms_code"],
    },
  });
}

async function userFindByNumber(userId, countryCode, phoneNumber) {
  return users.findOne({
    where: {
      id: userId,
      country_code: countryCode,
      phone_number: phoneNumber,
    },
  });
}

async function updatePhoneNumber(userId, countryCode, phoneNumber) {
  return await users.update(
    {
      country_code: countryCode,
      phone_number: phoneNumber,
    },
    {
      where: {
        id: userId,
      },
    }
  );
}

async function deviceTokenUpdates(obj) {
  return await users.update(
    {
      device_token: obj.deviceToken,
    },
    {
      where: {
        id: obj.user.id,
      },
    }
  );
}

function passwordEncrypt(password) {
  const pwd = crypto.createHash("md5").update(password).digest("hex");
  return pwd;
}

module.exports = {
  findUserById,
  passwordEncrypt,
  usercheckCodeVerifed,
  findUserByEmail,
  userFindByPhoneNumber,
  userFindByPhoneNumber,
  updateCodeByPhoneNumber,
  userFindByResetToken,
  userFindByCodeForLogin,
  smsCodeVerified,
  userFindByCodeForReset,
  updatePassword,
  userFindByNumber,
  userCodeVerifyById,
  updatePhoneNumber,
  deviceTokenUpdates,
  removeOTP,
};
