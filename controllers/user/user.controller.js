const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  userSignup,
  userLogin,
  refreshToken,
  forgotPassword,
  resetPassword,
  codeVerify,
} = require("./user.helper");

exports.signup = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await userSignup(param);
    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const param = { ...req.body };
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await userLogin(param);
    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 401);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    let param = { ...req.body };
    const user = await refreshToken(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 401);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const param = { ...req.body };
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await forgotPassword(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 401);
    }
    return successResponse(req, res, null, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;
    const user = req.body.user;

    if (isEmpty(newPassword) && isEmpty(confirmPassword)) {
      return errorResponse(req, res, "New And Confirm Password is blank");
    }
    const response = await resetPassword(newPassword, confirmPassword, user);

    if (!isEmpty(response) && response.err) {
      return errorResponse(req, res, response.msg, 400);
    }

    return successResponse(req, res, null, response.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.codeVerify = async (req, res) => {
  try {
    const param = { ...req.body };
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await codeVerify(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 401);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
