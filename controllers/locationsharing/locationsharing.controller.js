const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const { locationSharing, status } = require("./locationsharing.helper");

exports.locationSharing = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const location = await locationSharing(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, location.data, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.status = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const location = await status(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, location.data, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
