const { users } = require("../../models");
const moment = require("moment");

const {
  generateJWTtoken,
  comparePassword,
  verifyRefreshtoken,
  generateRefreshtoken,
} = require("../../helpers/helpers");

const {
  ALLREADY_REGISTER,
  INVALID_PWORD,
  USER_NOT_EXIST,
  PASSWORD_NOT_MATCH,
  INVALID_PHNUMBER,
  CODE_NOT_VALID,
} = require("../../helpers/messages");

const {
  findUserById,
  userFindByPhoneNumberAndPwd,
  updateCodeByPhoneNumber,
  userFindByPhoneNumber,
  passwordEncrypt,
  findUserByEmail,
  userFindByCodeForLogin,
  userFindByCodeForReset,
  smsCodeVerified,
  updatePassword,
} = require("../../Dao/user");

const { isEmpty } = require("lodash");

async function userSignup(param) {
  try {
    console.info('info 1');

    let user = await findUserByEmail(param.email);
    if (param.password !== param.confirmPassword) {
      return {
        err: true,
        msg: PASSWORD_NOT_MATCH,
      };
    }
    console.info("~ user", user)
    
    if (isEmpty(user)) {
      const userObj = {
        first_name: param.firstName,
        surname: param.surname,
        country_code: param.countryCode,
        phone_number: param.phoneNumber,
        email: param.email.toLowerCase(),
        password: passwordEncrypt(param.password),
        confirm_password: passwordEncrypt(param.password),
        sms_code: Math.floor(100000 + Math.random() * 900000),
      };

      const newUser = await users.create(userObj);
      console.info("~ user", user)

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
    console.info("~ error", error)

    return {
      err: true,
      msg: error.message,
    };
  }
}

async function userLogin(param) {
  try {
    let user = await userFindByPhoneNumberAndPwd(
      param.phoneNumber,
      param.countryCode,
      passwordEncrypt(param.password)
    );

    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }

    const password = comparePassword(param.password, user.password);
    if (!password) {
      return {
        err: true,
        msg: INVALID_PWORD,
      };
    }

    let tokenExpireIn = moment().add(process.env.AUTH_TOKEN_EXPIRED, "minutes");

    const accessToken = generateJWTtoken({
      id: user.id,
      email: user.email,
      phone_number: user.phone_number,
      country_code: user.country_code,
    });

    const refreshToken = generateRefreshtoken({
      id: user.id,
      email: user.email,
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
      await updateCodeByPhoneNumber(param.phoneNumber);
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

    let tokenExpireIn = moment().add(process.env.AUTH_TOKEN_EXPIRED, "minutes");
    let user;

    if (userLogin) {
      const accessToken = generateJWTtoken({
        id: userLogin.id,
        email: userLogin.email,
        phone_number: userLogin.phone_number,
        country_code: userLogin.country_code,
      });
      const refreshToken = generateRefreshtoken({
        id: userLogin.id,
        email: userLogin.email,
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
        phone_number: userResetPwd.phone_number,
        country_code: userResetPwd.country_code,
      });

      const refreshToken = generateRefreshtoken({
        id: userResetPwd.id,
        email: userResetPwd.email,
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

module.exports = {
  userSignup,
  userLogin,
  refreshToken,
  forgotPassword,
  resetPassword,
  codeVerify,
};
