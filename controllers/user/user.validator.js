const { errorResponse } = require("../../helpers/helpers");

const { INVALID_PARAMS } = require("../../helpers/messages");

exports.signupValidator = async (req, res, next) => {
  const param = { ...req.body };
  let failed = false;
  let allowedParams = [
    "firstName",
    "surname",
    "email",
    "password",
    "confirmPassword",
    "phoneNumber",
    "countryCode"
  ];

  Object.keys(param).forEach((element) => {
    if (!allowedParams.includes(element)) {
      failed = true;
    }
  });
  allowedParams.forEach((element) => {
    if (!param[element]) failed = true;
  });


  if (failed) return errorResponse(req, res, INVALID_PARAMS, 400);

  return next();
};

  exports.loginValidator = async (req, res, next) => {
    const param = { ...req.body };

    let failed = false;
    let allowedParams = ['phoneNumber', 'password'];

    Object.keys(param).forEach((element) => {
      if (!allowedParams.includes(element)) failed = true;
    });

    allowedParams.forEach((element) => {
      if (!param[element]) failed = true;
    });
    if (failed) return errorResponse(req, res, INVALID_PARAMS, 400);
    return next();
  };
