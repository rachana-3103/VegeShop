const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
  SOMETHING_WENT_WRONG,
  NO_TOKEN_PROVIDED,
  UNAUTHORIZED_USER,
} = require("./messages");
const nodeCache = require("node-cache");
const myCache = new nodeCache();

exports.authorization = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = user;

    const value = myCache.get(req.body.user.id);
    if (!value) {
      return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (!req.headers && !req.headers.authorization) {
      return this.errorResponse(req, res, NO_TOKEN_PROVIDED, 401);
    }
    return next();
  } catch (e) {
    return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
  }
};

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
  const token = jwt.sign(object, secretKey, {
    expiresIn: process.env.AUTH_TOKEN_EXPIRED,
  });

  myCache.set(`${object.id}`, token, Number(process.env.NODE_CACHE_EXPIRED));
  return token;
};

exports.deleteToken = (id) => {
  myCache.del(`${id}`);
};

exports.generateRefreshtoken = (
  object,
  secretKey = process.env.REFRESH_SECRET
) => {
  const token = jwt.sign(object, secretKey, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
  });
  return token;
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
