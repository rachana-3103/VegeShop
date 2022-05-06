const { users } = require("../../models");
const moment = require("moment");

const {
  generateJWTtoken,
  encrypt,
  comparePassword,
} = require("../../helpers/helpers");

const {
  ALLREADY_REGISTER,
  INVALID_UNAME_PWORD,
  USER_NOT_EXIST,
  OLD_PASSWORD_WRONG,
  INVALID_TOKEN,
  PASSWORD_NOT_MATCH,
} = require("../../helpers/messages");

const {
  findUserById,
  userFindByPhoneNumberAndPwd,
  updateResetTokensByPhoneNumber,
  userFindByPhoneNumber,
  passwordEncrypt,
  findUserByEmail,
  userFindByResetToken
} = require("../../Dao/user");
const randomString = require("randomstring");

const { isEmpty } = require("lodash");

async function userSignup(param) {
  try {
    let user = await findUserByEmail(param.email);
    if (param.password !== param.confirmPassword) {
      return {
        err: true,
        msg: PASSWORD_NOT_MATCH,
      };
    }
    if (isEmpty(user)) {
      const userObj = {
        first_name: param.firstName,
        surname: param.surname,
        phone_number: param.phoneNumber,
        email: param.email.toLowerCase(),
        password: passwordEncrypt(param.password),
        confirm_password: passwordEncrypt(param.password),
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
    let user = await userFindByPhoneNumberAndPwd(
      param.phoneNumber,
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
        msg: INVALID_UNAME_PWORD,
      };
    }

    let tokenExpireIn;
    const currentTime = moment();
    if (user.token_expired < currentTime || user.token_expired === null) {
      tokenExpireIn = moment().add(process.env.AUTH_TOKEN_EXPIRED, "minutes");
    }

    const encryptedToken = encrypt(
      generateJWTtoken({ id: user.id, email: user.email })
    );

    await users.update(
      {
        auth_token: encryptedToken,
        token_expired: tokenExpireIn,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    user = await findUserById(user.id);
    return {
      err: false,
      data: user,
      msg: "Login Successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      err: true,
      msg: error,
    };
  }
}

async function forgotPassword(param) {
  try {
    let user = await userFindByPhoneNumber(param.phoneNumber);

    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }
    const passwordResetToken = randomString.generate();

    await updateResetTokensByPhoneNumber(passwordResetToken, param.phoneNumber);

    return {
      err: false,
      data: passwordResetToken,
      msg: "Reset password link send in your phone number.",
    };
  } catch (error) {
    console.log(error);
    return {
      err: true,
      msg: error,
    };
  }
}

async function resetPassword(token, newPassword, confirmPassword) {
  try {
    const userData = await userFindByResetToken(token);
    if (!userData) {
        return {
            err: true,
            msg: INVALID_TOKEN,
        }
    }
    if (newPassword !== confirmPassword) {
      return {
        err: true,
        msg: PASSWORD_NOT_MATCH,
      };
    }

    return {
      err: false,
      data: {},
      msg: "Reset Password Successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      err: true,
      msg: error,
    };
  }
}

module.exports = {
  userSignup,
  userLogin,
  forgotPassword,
  resetPassword,
};
