const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
    locationSharing,
} = require("./locationsharing.helper");

exports.locationSharing = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await locationSharing(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
