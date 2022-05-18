const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { SOMETHING_WENT_WRONG } = require("./messages");

exports.successResponse = (req, res, data, message, code = 200) => {
  res.status(code);
  res.send({
    code,
    success: true,
    message,
    data,
  });
};

exports.errorResponse = (
  req,
  res,
  message = SOMETHING_WENT_WRONG,
  code = 500
) => {
  res.status(code);
  res.send({
    code,
    success: false,
    message,
    data: null,
  });
};

exports.generateJWTtoken = (object, secretKey = process.env.JWT_SECRET) => {
  return jwt.sign(object, secretKey, {
    expiresIn: process.env.AUTH_TOKEN_EXPIRED,
  });
};

exports.generateRefreshtoken = (
  object,
  secretKey = process.env.REFRESH_SECRET
) => {
  return jwt.sign(object, secretKey, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
  });
};

exports.verifyRefreshtoken = (
  token,
  secretKey = process.env.REFRESH_SECRET
) => {
  const user = jwt.verify(token, secretKey);
  return user;
};

exports.comparePassword = (paramPass, dbPass) => {
  const password = crypto.createHash("md5").update(paramPass).digest("hex");
  if (password === dbPass) {
    return true;
  }
  return false;
};

exports.validateRequest = (param, schema) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  
  const { error } = schema.validate(param, options);
  if (error) {
    let object = [];
    `${error.details.map((x) => {
      if (
        (x.path[0] == "password" || x.path[0] == "newPassword") &&
        x.type == "string.pattern.base"
      ) {
        x.message =
          "Password must have 8 characters including capital letters and symbols.";
      }
      object.push({ error: x.message });
    })}`;
    return object;
  }
};
