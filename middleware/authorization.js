const { errorResponse } = require("../helpers/helpers");
const { NO_TOKEN_PROVIDED, UNAUTHORIZED_USER } = require("../helpers/messages");
const jwt = require("jsonwebtoken");

exports.authorization = async (req, res, next) => {
  try {
    if (!req.headers && !req.headers.authorization) {
      return errorResponse(req, res, NO_TOKEN_PROVIDED, 401);
    }
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = user;
    return next();
  } catch (e) {
    return errorResponse(req, res, UNAUTHORIZED_USER, 401);
  }
};
