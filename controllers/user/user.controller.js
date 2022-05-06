const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const { userSignup, userLogin , forgotPassword, resetPassword} = require("./user.helper");

exports.signup = async (req, res) => {
  try {
    const param = req.body;
    const user = await userSignup(param);
    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 400);
    }
    return successResponse(req, res, user.data , user.msg);
  } catch (error) {
    console.log(error);
    return errorResponse(req, res, error, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const param = { ...req.body };
    const user = await userLogin(param);
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
    const data = req.body
    if (isEmpty(data)){
      return errorResponse(req, res, 'Something Went Wrong', 400)
    }

    const param = { ...req.body };
    const user = await forgotPassword(param);

    if (!isEmpty(user) && user.err) {
      return errorResponse(req, res, user.msg, 401);
    }
    return successResponse(req, res, user.data, user.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}

exports.resetPassword = async (req, res) => {
  try {
     const token = req.query.token
    if (isEmpty(token)){
      return errorResponse(req, res, TOKEN_NOT_FOUND, 400)
    }
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword

    if (isEmpty(newPassword) && isEmpty(confirmPassword)){
      return errorResponse(req, res, 'New And Confirm Password is blank')
    }
    const response = await resetPassword(token, newPassword, confirmPassword);

    if(!isEmpty(response) && response.err){
      return errorResponse(req, res, response.msg, 400)
    }

    return successResponse(req, res, response.msg);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}