const { users } = require("../../models");
const moment = require("moment");
// const AWS = require('aws-sdk');

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
  updateCodeByPhoneNumber,
  userFindByPhoneNumber,
  passwordEncrypt,
  findUserByEmail,
  userFindByResetToken,
  userFindByCodeForLogin,
  userFindByCodeForReset,
  smsCodeVerified,
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
    // AWS.config.update({region: 'REGION'});
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

      // const params = {
      //     Message: 'This OTP useful for user 2 step authentication',
      //     PhoneNumber: userObj.sms_code,
      //     MessageAttributes: {
      //         'AWS.SNS.SMS.SenderID': {
      //             'DataType': 'String',
      //             'StringValue': 'Brett Williams'
      //         }
      //     }
      // };

      // const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
      // console.log("~ publishTextPromise", publishTextPromise)


      // publishTextPromise.then(
      //     function (data) {
      //         res.end(JSON.stringify({ MessageID: data.MessageId }));
      //     }).catch(
      //         function (err) {
      //             res.end(JSON.stringify({ Error: err }));
      //         });

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
    return {
      err: true,
      msg: error,
    };
  }
}

async function forgotPassword(param) {
  try {
    let user = await userFindByPhoneNumber(param.phoneNumber, param.countryCode);

    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }else{
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

async function resetPassword(token, newPassword, confirmPassword) {
  try {
    const userData = await userFindByResetToken(token);
    if (!userData) {
      return {
        err: true,
        msg: INVALID_TOKEN,
      };
    }
    if (newPassword !== confirmPassword) {
      return {
        err: true,
        msg: PASSWORD_NOT_MATCH,
      };
    }

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
      param.phoneNumber
    );
    const userResetPwd = await userFindByCodeForReset(
      param.code,
      param.phoneNumber
    );
    if (!userLogin && !userResetPwd) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    } else {
      await smsCodeVerified(param.code, param.phoneNumber);
    }

    return {
      err: false,
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
  forgotPassword,
  resetPassword,
  codeVerify
};
