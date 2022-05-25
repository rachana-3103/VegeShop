const { users } = require("../../models");
const moment = require("moment");

const {
  generateJWTtoken,
  comparePassword,
  verifyRefreshtoken,
  generateRefreshtoken,
  deleteToken,
} = require("../../helpers/helpers");

const {
  ALLREADY_REGISTER,
  INVALID_PWORD,
  PASSWORD_NOT_MATCH,
  INVALID_PHNUMBER,
  CODE_NOT_VALID,
  OTP_MESSAGE,
  NEW_PHONENUMBER_EXIST,
  CODE_NOT_VERIFIED,
  PASSWORD_USED,
} = require("../../helpers/messages");

const {
  findUserById,
  userFindByPhoneNumber,
  usercheckCodeVerifed,
  updateCodeByPhoneNumber,
  passwordEncrypt,
  findUserByEmail,
  userFindByCodeForLogin,
  userFindByCodeForReset,
  smsCodeVerified,
  updatePassword,
  userFindByNumber,
  userCodeVerifyById,
  updatePhoneNumber,
} = require("../../Dao/user");
const AWS = require("aws-sdk");
const { isEmpty } = require("lodash");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});
const sns = new AWS.SNS();

async function userSignup(param) {
  try {
    let user = await findUserByEmail(param.email);
    const OTP = Math.floor(100000 + Math.random() * 900000);
    const mobile = "+" + Number(param.countryCode) + param.phoneNumber;

    let sendSMS = {
      Subject: "Aegis24/7 Verification Code",
      Message: `${OTP_MESSAGE} ${OTP} `,
      PhoneNumber: mobile,
    };

    sns.publish(sendSMS, (err, result) => {
      if (err) {
        console.info(err);
      } else {
        console.info(result);
      }
    });

    if (isEmpty(user)) {
      const userObj = {
        name: param.name,
        country_code: param.countryCode,
        phone_number: param.phoneNumber,
        email: param.email.toLowerCase(),
        password: passwordEncrypt(param.password),
        sms_code: OTP,
      };

      const newUser = await users.create(userObj);
      user = await findUserById(newUser.id);

      return {
        err: false,
        data: user,
        msg: "Signup Successfully.",
      };
    } else {
      return {
        err: true,
        msg: ALLREADY_REGISTER,
      };
    }
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
}

async function userLogin(param) {
  try {
    let user = await userFindByPhoneNumber(
      param.phoneNumber,
      param.countryCode
    );
    if (!user) {
      return {
        err: true,
        msg: INVALID_PHNUMBER,
      };
    }

    let code = await usercheckCodeVerifed(param.phoneNumber, param.countryCode);
    if (code) {
      return {
        err: true,
        msg: CODE_NOT_VERIFIED,
      };
    }

    const password = comparePassword(param.password, user.password);
    if (!password) {
      return {
        err: true,
        msg: INVALID_PWORD,
      };
    }

    let date = moment().add(process.env.TOKEN_EXPIRED, "hours");
    const tokenExpireIn = date.format("YYYY-MM-DDTHH:mm:ss");

    const accessToken = generateJWTtoken({
      id: user.id,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number,
      country_code: user.country_code,
    });

    const refreshToken = generateRefreshtoken({
      id: user.id,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number,
      country_code: user.country_code,
    });

    user = await findUserById(user.id);
    user.dataValues.access_token = accessToken;
    user.dataValues.refresh_token = refreshToken;
    user.dataValues.token_expired = tokenExpireIn;

    return {
      err: false,
      data: user,
      msg: "Login Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function refreshToken(param) {
  try {
    const user = verifyRefreshtoken(param.refreshToken);
    const accessToken = generateJWTtoken({
      id: user.id,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number,
      country_code: user.country_code,
    });
    return {
      err: false,
      data: { access_token: accessToken },
      msg: "Generate new access token.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function forgotPassword(param) {
  try {
    let user = await userFindByPhoneNumber(
      param.phoneNumber,
      param.countryCode
    );

    if (!user) {
      return {
        err: true,
        msg: INVALID_PHNUMBER,
      };
    } else {
      const OTP = Math.floor(100000 + Math.random() * 900000);
      const mobile = "+" + Number(param.countryCode) + param.phoneNumber;

      let sendSMS = {
        Subject: "Aegis24/7 Verification Code",
        Message: `${OTP_MESSAGE} ${OTP} `,
        PhoneNumber: mobile,
      };
      sns.publish(sendSMS, (err, result) => {
        if (err) {
          console.info(err);
        } else {
          console.info(result);
        }
      });
      await updateCodeByPhoneNumber(OTP, param.countryCode, param.phoneNumber);
    }

    return {
      err: false,
      msg: "OTP send in your phone number.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function resetPassword(newPassword, confirmPassword, user) {
  try {
    if (user.password == passwordEncrypt(newPassword)) {
      return {
        err: true,
        msg: PASSWORD_USED,
      };
    }
    if (newPassword !== confirmPassword) {
      return {
        err: true,
        msg: PASSWORD_NOT_MATCH,
      };
    }

    await updatePassword(passwordEncrypt(newPassword), user);

    return {
      err: false,
      msg: "Reset Password Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function codeVerify(param) {
  try {
    const userLogin = await userFindByCodeForLogin(
      param.code,
      param.phoneNumber,
      param.countryCode
    );
    const userResetPwd = await userFindByCodeForReset(
      param.code,
      param.phoneNumber,
      param.countryCode
    );
    if (!userLogin && !userResetPwd) {
      return {
        err: true,
        msg: CODE_NOT_VALID,
      };
    } else {
      await smsCodeVerified(param.code, param.phoneNumber, param.countryCode);
    }

    let date = moment().add(process.env.TOKEN_EXPIRED, "hours");
    const tokenExpireIn = date.format("YYYY-MM-DDTHH:mm:ss");
    let user;

    if (userLogin) {
      const accessToken = generateJWTtoken({
        id: userLogin.id,
        email: userLogin.email,
        password: userLogin.password,
        phone_number: userLogin.phone_number,
        country_code: userLogin.country_code,
      });
      const refreshToken = generateRefreshtoken({
        id: userLogin.id,
        email: userLogin.email,
        password: userLogin.password,
        phone_number: userLogin.phone_number,
        country_code: userLogin.country_code,
      });
      userLogin.dataValues.access_token = accessToken;
      userLogin.dataValues.refresh_token = refreshToken;
      userLogin.dataValues.token_expired = tokenExpireIn;
      user = userLogin;
    } else {
      const accessToken = generateJWTtoken({
        id: userResetPwd.id,
        email: userResetPwd.email,
        password: userResetPwd.password,
        phone_number: userResetPwd.phone_number,
        country_code: userResetPwd.country_code,
      });

      const refreshToken = generateRefreshtoken({
        id: userResetPwd.id,
        email: userResetPwd.email,
        password: userResetPwd.password,
        phone_number: userResetPwd.phone_number,
        country_code: userResetPwd.country_code,
      });
      userResetPwd.dataValues.access_token = accessToken;
      userResetPwd.dataValues.refresh_token = refreshToken;
      userResetPwd.dataValues.token_expired = tokenExpireIn;
      user = userResetPwd;
    }

    return {
      err: false,
      data: user,
      msg: "Code Verified Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function updateCode(param) {
  try {
    const user = await userFindByNumber(
      param.user.id,
      param.oldCountryCode,
      param.oldPhoneNumber
    );
    if (!user) {
      return {
        err: true,
        msg: INVALID_PHNUMBER,
      };
    }
    const newNumberCheck = await userFindByNumber(
      param.user.id,
      param.newCountryCode,
      param.newPhoneNumber
    );

    if (newNumberCheck) {
      return {
        err: true,
        msg: NEW_PHONENUMBER_EXIST,
      };
    }

    const OTP = Math.floor(100000 + Math.random() * 900000);
    const mobile = "+" + Number(param.newCountryCode) + param.newPhoneNumber;

    let sendSMS = {
      Subject: "Aegis24/7 Verification Code",
      Message: `${OTP_MESSAGE} ${OTP} `,
      PhoneNumber: mobile,
    };

    sns.publish(sendSMS, (err, result) => {
      if (err) {
        console.info(err);
      } else {
        console.info(result);
      }
    });
    await updateCodeByPhoneNumber(
      OTP,
      param.oldCountryCode,
      param.oldPhoneNumber
    );

    return {
      err: false,
      data: null,
      msg: "OTP send in your new phone number.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function updateNewNumber(param) {
  try {
    const user = await userCodeVerifyById(param.code, param.user.id);
    if (!user) {
      return {
        err: true,
        msg: CODE_NOT_VALID,
      };
    }

    await updatePhoneNumber(
      param.user.id,
      param.countryCode,
      param.phoneNumber
    );

    return {
      err: false,
      data: null,
      msg: "New Phone Number Updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

async function logout(id) {
  try {
    await deleteToken(id);
    return {
      err: false,
      data: null,
      msg: "Logout Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
}

module.exports = {
  userSignup,
  userLogin,
  refreshToken,
  forgotPassword,
  resetPassword,
  codeVerify,
  updateCode,
  updateNewNumber,
  logout,
};
