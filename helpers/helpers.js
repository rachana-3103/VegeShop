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
    // myCache.set(user.id, user, 3600);
    const value = myCache.get(user.id);
    if (!value) {
      return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (value.role == 'user') {
      return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (!req.headers && !req.headers.authorization) {
      return this.errorResponse(req, res, NO_TOKEN_PROVIDED, 400);
    }
    return next();
  } catch (e) {
    console.log("🚀 ~ e:", e)
    return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
  }
};

exports.authorizationUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = user;
    // myCache.set(user.id, user, 3600);
    const value = myCache.get(user.id);
    if (!value) {
      return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (value.role == 'admin') {
      return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
    }
    if (!req.headers && !req.headers.authorization) {
      return this.errorResponse(req, res, NO_TOKEN_PROVIDED, 400);
    }
    return next();
  } catch (e) {
    console.log("🚀 ~ e:", e)
    return this.errorResponse(req, res, UNAUTHORIZED_USER, 401);
  }
};

exports.successResponse = (req, res, data, msg, code = 200) => {
  res.status(code);
  res.send({
    code,
    err: false,
    msg,
    data,
  });
};

exports.errorResponse = (req, res, msg = SOMETHING_WENT_WRONG, code = 500) => {
  res.status(code);
  res.send({
    code,
    err: true,
    msg,
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
    let object = error.details[0].message;
    if(error.details[0].type == 'string.pattern.base'){
      object =  "Password must have 8 characters including capital letters and symbols.";
    }
    if(error.details[0].type == 'string.email'){
      object = 'Enter a valid email address.'
    }
    return object;
  }
};
