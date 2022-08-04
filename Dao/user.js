const crypto = require("crypto");
const { users } = require("../models/index");
const moment = require("moment");

exports.userCreate = async (obj) => {
  return await users.create(obj);
};

exports.findUserRegistered = async (countryCode, phoneNumber) => {
  return await users.findOne({
    where: {
      country_code: countryCode,
      phone_number: phoneNumber,
      sms_verified: false,
    },
  });
};

exports.findUserByEmail = async (email, phoneNumber, countryCode) => {
  return await users.findOne({
    where: {
      phone_number: phoneNumber,
      country_code: countryCode,
      sms_verified: true,
    },
  });
};

exports.findUserNotVerified = async (email) => {
  return await users.findOne({
    where: {
      email,
      sms_verified: false,
    },
  });
};

exports.getOldPassword = async (id, password) => {
  return await users.findOne({
    where: {
      id,
      password,
    },
  });
};

exports.userFindByPhoneNumber = async (phoneNumber, countryCode) => {
  return await users.findOne({
    where: {
      country_code: countryCode,
      phone_number: phoneNumber,
    },
  });
};

exports.usercheckCodeVerifed = async (phoneNumber, countryCode) => {
  return await users.findOne({
    where: {
      country_code: countryCode,
      phone_number: phoneNumber,
      sms_verified: false,
    },
  });
};

exports.updateCodeByPhoneNumber = async (code, param) => {
  return await users.update(
    {
      name: param.name,
      email: param.email,
      password: this.passwordEncrypt(param.password),
      sms_code: code,
      otp_generated_at: moment().format("YYYY-MM-DDTHH:mm"),
    },
    {
      where: {
        country_code: param.countryCode,
        phone_number: param.phoneNumber,
      },
    }
  );
};

exports.userFindByResetToken = async (token) => {
  return await users.findOne({
    where: {
      reset_token: token,
    },
  });
};

exports.userFindByCodeForLogin = async (code, phoneNumber, countryCode) => {
  return await users.findOne({
    where: {
      sms_code: code,
      phone_number: phoneNumber,
      sms_verified: false,
      country_code: countryCode,
    },
  });
};

exports.userFindByCodeForReset = async (code, phoneNumber, countryCode) => {
  return await users.findOne({
    where: {
      sms_code: code,
      phone_number: phoneNumber,
      sms_verified: true,
      country_code: countryCode,
    },
  });
};

exports.userCodeVerifyById = async (code, userId) => {
  return await users.findOne({
    where: {
      id: userId,
      sms_code: code,
      sms_verified: true,
    },
  });
};

exports.smsCodeVerified = async (code, phoneNumber, countryCode) => {
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
};

exports.removeOTP = async (id) => {
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
};

exports.updatePassword = async (password, user) => {
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
};

exports.findUserById = async (userId) => {
  return users.findOne({
    where: {
      id: userId,
    },
    attributes: {
      exclude: ["password", "sms_code"],
    },
  });
};

exports.userFindByNumber = async (userId, countryCode, phoneNumber) => {
  return users.findOne({
    where: {
      id: userId,
      country_code: countryCode,
      phone_number: phoneNumber,
    },
  });
};

exports.updatePhoneNumber = async (userId, countryCode, phoneNumber) => {
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
};

exports.deviceTokenUpdates = async (obj) => {
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
};

exports.updateProfiles = async (name, email, userId) => {
  return await users.update(
    {
      name,
      email,
    },
    {
      where: {
        id: userId,
      },
    }
  );
};

exports.passwordEncrypt = (password) => {
  const pwd = crypto.createHash("md5").update(password).digest("hex");
  return pwd;
};

exports.userDelete = async (userId) => {
  return await users.destroy({
    where: { id: userId },
    force: true,
  });
};
