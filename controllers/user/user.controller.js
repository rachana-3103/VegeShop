const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  userSignup,
  userLogin,
  refreshToken,
  forgotPassword,
  resetPassword,
  changePassword,
  codeVerify,
  updateCode,
  updateNewNumber,
  logout,
  deviceTokenUpdate,
  notificationSend,
  updateProfile,
  deleteAccount,
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
      return errorResponse(req, res, user.msg, 400);
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
      return errorResponse(req, res, user.msg, 400);
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
      return errorResponse(req, res, "New And Confirm Password is blank", 400);
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

exports.changePassword = async (req, res) => {
  try {
    const response = await changePassword(req.body);

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
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.updateCode = async (req, res) => {
  try {
    const param = { ...req.body };
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await updateCode(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.updateNewNumber = async (req, res) => {
  try {
    const param = { ...req.body };
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await updateNewNumber(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    const user = await logout(req.body.user.id);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, null, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.deviceTokenUpdate = async (req, res) => {
  try {
    const user = await deviceTokenUpdate(req.body);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, null, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.notificationSend = async (req, res) => {
  try {
    const user = await notificationSend(req.body);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, null, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const user = await updateProfile(param);
    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const param = req.body;
    const user = await deleteAccount(param);
    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
