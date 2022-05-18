const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");
const {
  addLocation,
  getLocation,
  deleteLocation,
  updateLocation,
  getLocationDetails,
} = require("./location.helper");

exports.addLocation = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const location = await addLocation(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, null, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getLocation = async (req, res) => {
  try {
    const param = { ...req.body };
    const location = await getLocation(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, location.data, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const param = { ...req.body, ...req.query };
    const location = await deleteLocation(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, null, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const location = await updateLocation(param);
    if (!isEmpty(location) && location.err) {
      return errorResponse(req, res, location.msg, 400);
    }
    return successResponse(req, res, null, location.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getLocationDetails = async (req, res) => {
    try {
      const param = { ...req.params, ...req.body };
      const location = await getLocationDetails(param);
      if (!isEmpty(location) && location.err) {
        return errorResponse(req, res, location.msg, 400);
      }
      return successResponse(req, res, location.data, location.msg);
    } catch (error) {
      return errorResponse(req, res, error, 400);
    }
  };

