const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  addSafetyPlan,
  updateSafetyPlan,
  cancelSafetyPlan,
  completeSafetyPlan,
  getSafetyPlan,
  alertSafetyPlan,
  checkInOut,
  extend,
  responded,
  okay
} = require("./safetyplan.helper");

exports.addSafetyPlan = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await addSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.updateSafetyPlan = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await updateSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.cancelSafetyPlan = async (req, res) => {
  try {
    const param = req.body;
    const safetyplan = await cancelSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.completeSafetyPlan = async (req, res) => {
  try {
    const param = req.body;
    const safetyplan = await completeSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getSafetyPlan = async (req, res) => {
  try {
    const param = req.body;
    const safetyplan = await getSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 200);
    }
    return successResponse(req, res, safetyplan.data, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.alertSafetyPlan = async (req, res) => {
  try {
    const param = req.body;

    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await alertSafetyPlan(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, safetyplan.data, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.responded = async (req, res) => {
  try {
    const param = req.body;

    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await responded(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, safetyplan.data, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.okay = async (req, res) => {
  try {
    const param = req.body;

    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await okay(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, safetyplan.data, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};



exports.checkInOut = async (req, res) => {
  try {
    const param = req.body;

    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await checkInOut(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, safetyplan.data, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.extend = async (req, res) => {
  try {
    const param = req.body;

    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const safetyplan = await extend(param);
    if (!isEmpty(safetyplan) && safetyplan.err) {
      return errorResponse(req, res, safetyplan.msg, 400);
    }
    return successResponse(req, res, null, safetyplan.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
