const moment = require("moment");
const path = require("path");
const nodemailer = require("nodemailer");
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
  STATUS,
  OTP_MESSAGE,
  NEW_PHONENUMBER_EXIST,
  CODE_NOT_VERIFIED,
  PASSWORD_USED,
  OTP_EXPIRED,
  PASSWORD_OLD_WRONG,
  USER_NOT_EXIST,
} = require("../../helpers/messages");

const {
  findUserById,
  userFindByPhoneNumber,
  findUser,
  updateCodeByPhoneNumber,
  passwordEncrypt,
  getOldPassword,
  findUserByEmail,
  userFindByCodeForLogin,
  userFindByCodeForReset,
  smsCodeVerified,
  updatePassword,
  userFindByNumber,
  userCodeVerifyById,
  updatePhoneNumber,
  deviceTokenUpdates,
  removeOTP,
  updateProfiles,
  userDelete,
  userCreate,
  updateNotification,
  findUserEmail
} = require("../../Dao/user");

const { userGroupDelete } = require("../../Dao/product");
const AWS = require("aws-sdk");
const { isEmpty } = require("lodash");
const admin = require("firebase-admin");
const { param } = require("../../routes/user.routes");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "Aegis24/7",
    clientEmail: "firebase-adminsdk-teazy@ages247.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLVLFdyUW0nhbt\no3es8cKu4woupchKn8G7wEkVibWpfmXBhktrcI0a9BI+gHs1x9M6QU2Elum6Trk7\nMRSzcqaxqFhzP7qhsfbNtZbIaIEpKFYrCZtCPm7gnMCjPYC0jnyTHhRzlGGPWg7n\n4kTMdO49GOMRWV6gGg6MLtQgUafgdZFOE6lqTcihEwF5/eS6o7AkBRNq7ik9mEgk\n2asz5hX1ujmuKP29d6J5kXoGQIi6nAm5ORcbdejU5Ppu4Tm365qovoomkAIoHRY9\nFyJWdbu8B74VFc7oNkuPasSwS0eWHUUr+v6+Q8FlHXbGqsqnuhlmigAwcl9NYVVu\n3s5p9lhBAgMBAAECggEAW//dJNdN79RcAXgmTR0yflkCIWsnfgRc7yuopdMiXCdx\nuSefdmR9pAVtP9R4azQX8dLcVTLHXGIEU7D4cd1daSMHqlXahxDz383bBKCsWEgE\n/QIius1u87hZPUM1ufyChzpj/IvVvLv95JOvl2cM6J4bF519QCmqDWme12S69cbM\ntG5aSoTIvcmmpsQ4xwBYWie7P9J1mSrWncAbkxXMh80GX9LpX/DwPYtvZ4xqZ2rX\nViTTXYmToKGLhw69vFOCtBXxoxxvCWq/bqhV5Ejwlsd4ciGUv4tPr8XQjsQGdGMl\n3iXXCEHkN7X2CtOdqdiqxfzVOmXBUYyu5b1JDUzkZQKBgQD9iZ7ekeamNneoBLW0\nf+WOLUwuU3g3G/0dQO81gz4oETG+zdQZQihdhWxKMrgOKOjeHz3iTHjgKDJHeT4B\n7bOohuqjbPd7+sj2mr94zC2UFMuwFuHy6/L78RvZZHqSjbVFoJUMChSGnnopUCN6\nVvwUBDZm39L71dMjBkPVyKG9KwKBgQDNTj3PWluOGhcepS4V56oZwgZHgVc3d7fq\n/bA1cuZID6sbL/P7tMuck49XSevu/TliT2XSYN9goLR+TyKyiTnLBvtHlsKgfgiV\nntbgT/mIlJy+lGcQVgNYgE/vW3z0ZZrfFMfdOT+esy1ZdNJ4Vbq5968ktFYLHMBl\nIjM6W7aCQwKBgQDAhJOiJd+iLpHFf24KVWOWBkdmlfMexZ35bKk3VSUJf6TqYZjA\nZUAJY5rK7KBeACpzH/35rF/MtjkXlLTE+h4Fxgy9c6yo89FNkEv8Ce5CF1hjqbyA\nnTGwpXCkLmv0hK405K7IqY7UedoBLN0DtLFM8bXtf9/RYpgkbEluOB64aQKBgQDH\nx5Q0GywuaksHIhtna2hF6l0r5buWGSRaQgTe7fESPFT3fsE/tR3RPnHkseUpSTY2\n6SYfAu87WwZoRt9vtkMLwr5wWk8H17zIw6k62/fpJRwmA8kKx3g3/ZxLQc6lD94V\nqGYYaqXy605810YbnOi4IEJJSEbWR2Mcxpvs9OPzewKBgER8LzTkA82mGu+A6ltC\nVsf2J5urlWP3EN1aXfk1j186WkGP9rvh6QNywO5FkraI4ftnmY6lAE+8h/goCteP\n5wjEeA4UxNKWOtbZVFJVD7VFHOL9zjPvut887qQ1ZGKEUYBtL1V84gDF+sNJ/t6Z\naq8zTNH5bZ4Ux7yiyPI/fzOT\n-----END PRIVATE KEY-----\n",
  }),
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const sns = new AWS.SNS();

exports.userSignup = async (param) => {
  try {
    let user = await findUserByEmail(param.contactNumber, param.email);
    if (user) {
      return {
        err: true,
        msg: ALLREADY_REGISTER,
      };
    }

    const userObj = {
      first_name: param.firstName,
      last_name: param.lastName,
      contact_number: param.contactNumber,
      email: param.email,
      password: passwordEncrypt(param.password),
      address: param.address,
      role:param.role
    };

    const newUser = await userCreate(userObj);
    if (newUser) {
      user = await findUserById(newUser.id);
      return {
        err: false,
        code: 200,
        data: user,
        msg: "Signup Successfully.",
      };
    }
  } catch (error) {
    return {
      err: true,
      msg: error.message,
    };
  }
};

exports.userLogin = async (param) => {
  try {
    let user = await findUser(param.email, passwordEncrypt(param.password));
    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }

    if (user) {
      const password = comparePassword(param.password, user.password);
      if (!password) {
        return {
          err: true,
          msg: INVALID_PWORD,
        };
      }

      let date = moment().add(process.env.TOKEN_EXPIRED, "hours");
      const tokenExpireIn = date.format("YYYY-MM-DDTHH:mm");

      const accessToken = generateJWTtoken({
        id: user.id,
        email: user.email,
        password: user.password,
        role:user.role
      });

      const refreshToken = generateRefreshtoken({
        id: user.id,
        email: user.email,
        password: user.password,
        role:user.role
      });

      user = await findUserById(user.id);
      if (user) {
        user.dataValues.access_token = accessToken;
        user.dataValues.refresh_token = refreshToken;
        user.dataValues.token_expired = tokenExpireIn;
      }

      return {
        err: false,
        data: user,
        msg: "Login Successfully.",
      };
    }
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.refreshToken = async (param) => {
  try {
    const user = verifyRefreshtoken(param.refreshToken);
    const accessToken = generateJWTtoken({
      id: user.id,
      email: user.email,
      name: user.name,
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
};

exports.forgotPassword = async (param) => {
  try {
    const user = await findUserEmail(param.email);
    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PWD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: param.email,
      subject: 'Password Reset Request',
      text: `Your password reset token link is ..`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        // res.json({ message: 'Password reset email sent' });
      }
    });

    return {
      err: false,
      msg: "Password reset link sent into your inbox.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.resetPassword = async (newPassword, confirmPassword, user) => {
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
};

exports.changePassword = async (param) => {
  try {
    const newPassword = param.newPassword;
    const confirmPassword = param.confirmPassword;
    const user = param.user;
    const checkOldPwd = await getOldPassword(
      user.id,
      passwordEncrypt(param.currentPassword)
    );
    if (!checkOldPwd) {
      return {
        err: true,
        msg: PASSWORD_OLD_WRONG,
      };
    }

    if (isEmpty(newPassword) && isEmpty(confirmPassword)) {
      return errorResponse(req, res, "New And Confirm Password is blank");
    }
    if (user.password == passwordEncrypt(newPassword)) {
      return {
        err: true,
        msg: PASSWORD_USED,
      };
    }

    await updatePassword(passwordEncrypt(param.newPassword), user);

    return {
      err: false,
      msg: "Password Change Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.codeVerify = async (param) => {
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
      const currentDate = moment();
      let otpGenerateDate;
      if (userLogin) {
        otpGenerateDate = moment(userLogin.dataValues.otp_generated_at);
        const dateDiff = currentDate.diff(otpGenerateDate, "minutes");
        if (dateDiff >= 2) {
          return {
            err: true,
            msg: OTP_EXPIRED,
          };
        }
      } else {
        otpGenerateDate = moment(userResetPwd.dataValues.otp_generated_at);
        const dateDiff = currentDate.diff(otpGenerateDate, "minutes");
        if (dateDiff >= 5) {
          return {
            err: true,
            msg: OTP_EXPIRED,
          };
        }
      }
      await smsCodeVerified(param.code, param.phoneNumber, param.countryCode);
    }

    let date = moment().add(process.env.TOKEN_EXPIRED, "hours");
    const tokenExpireIn = date.format("YYYY-MM-DDTHH:mm");
    let user;

    if (userLogin) {
      await removeOTP(userLogin.id);
      const accessToken = generateJWTtoken({
        id: userLogin.id,
        email: userLogin.email,
        name: userLogin.name,
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
      await removeOTP(userResetPwd.id);
      const accessToken = generateJWTtoken({
        id: userResetPwd.id,
        email: userResetPwd.email,
        name: userResetPwd.name,
        password: userResetPwd.password,
        phone_number: userResetPwd.phone_number,
        country_code: userResetPwd.country_code,
      });

      const refreshToken = generateRefreshtoken({
        id: userResetPwd.id,
        email: userResetPwd.email,
        name: userResetPwd.name,
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
};

exports.updateCode = async (param) => {
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
      Subject: "Aegis 24/7. Your cell phone verification code is:",
      Message: `${OTP_MESSAGE} ${OTP} `,
      PhoneNumber: mobile,
      MessageAttributes: {
        "AWS.MM.SMS.OriginationNumber": {
          DataType: "String",
          StringValue: process.env.TEN_DLC,
        },
      },
    };

    sns.publish(sendSMS, (err, result) => {
      if (err) {
        console.info(err);
      } else {
        console.info(result);
      }
    });
    param.countryCode = param.oldCountryCode;
    param.phoneNumber = param.oldPhoneNumber;
    await updateCodeByPhoneNumber(OTP, param);

    return {
      err: false,
      data: null,
      msg: "OTP send in your new phone number.",
    };
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error,
    };
  }
};

exports.updateNewNumber = async (param) => {
  try {
    const user = await userCodeVerifyById(param.code, param.user.id);
    if (!user) {
      return {
        err: true,
        msg: CODE_NOT_VALID,
      };
    }
    const currentDate = moment();
    const otpGenerateDate = moment(user.dataValues.otp_generated_at);
    const dateDiff = currentDate.diff(otpGenerateDate, "minutes");
    if (dateDiff >= 5) {
      return {
        err: true,
        msg: OTP_EXPIRED,
      };
    }
    await updatePhoneNumber(
      param.user.id,
      param.countryCode,
      param.phoneNumber
    );
    await removeOTP(param.user.id);

    return {
      err: false,
      data: null,
      msg: "New Phone Number Updated Successfully.",
    };
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error,
    };
  }
};

exports.logout = async (id, req) => {
  try {
    await deleteToken(id, req);
    return {
      err: false,
      data: null,
      msg: "Logout Successfully.",
    };
  } catch (error) {
    console.log("~ error", error);
    return {
      err: true,
      msg: error,
    };
  }
};

exports.deviceTokenUpdate = async (param) => {
  try {
    await deviceTokenUpdates(param);
    return {
      err: false,
      data: null,
      msg: "Device token updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.notificationSend = async (param) => {
  try {
    const payload = {
      data: param.data,
      notification: param.notification,
    };

    const options = {
      priority: "high",
      ttl: 10 * 60 * 1000,
    };
    admin
      .messaging()
      .sendToDevice(param.to, payload, options)
      .then((response) => {
        console.info("~ response", response);
      })
      .catch((err) => {
        console.info("~ err", err);
      });

    return {
      err: false,
      data: null,
      msg: "Notification send Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.updateProfile = async (param) => {
  try {
    const user = await findUserById(param.user.id);
    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }

    await updateProfiles(
      param.firstName,
      param.lastName,
      param.contactNumber,
      param.address,
      param.email,
      param.user.id
    );

    return {
      err: false,
      data: null,
      msg: "Profile updated Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.deleteAccount = async (param) => {
  try {
    const userId = param.user.id;
    const user = await findUserById(userId);
    if (!user) {
      return {
        err: true,
        msg: USER_NOT_EXIST,
      };
    }

    await userGroupDelete(userId);
    await userSafetyplanDelete(userId);
    await userLocationDelete(userId);
    await userLocationSharingDelete(userId);
    await userFaqDelete(userId);
    await userDelete(userId);

    return {
      err: false,
      data: null,
      msg: "Account delete Successfully.",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.settings = async (req) => {
  try {
    let url = "";
    if (req.body.htmlType === "term_and_condition") {
      url = `http://34.227.59.13:5000/documents/terms.html`;
    }
    if (req.body.htmlType === "help") {
      url = `http://34.227.59.13:5000/documents/help.html`;
    }
    if (req.body.htmlType === "guidance") {
      url = `http://34.227.59.13:5000/documents/guidance.html`;
    }
    if (req.body.htmlType === "policy") {
      url = `http://34.227.59.13:5000/documents/policy.html`;
    }
    const data = {
      html_type: req.body.htmlType,
      url,
    };
    console.log("~ data", data);
    return {
      err: false,
      data,
      msg: "",
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};

exports.notification = async (req) => {
  try {
    let msg = "";
    const user = await findUserById(req.body.user.id);
    if (user.notification) {
      updateNotification(user.id, false);
      msg = "Notification off.";
    } else {
      updateNotification(user.id, true);
      msg = "Notification on.";
    }

    return {
      err: false,
      msg,
    };
  } catch (error) {
    return {
      err: true,
      msg: error,
    };
  }
};
