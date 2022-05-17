const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  addGroup,
  listGroup,
  getGroupDetails,
  deleteGroup,
  updateGroup,
} = require("./group.helper");

exports.addGroup = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const group = await addGroup(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, group.data, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.listGroup = async (req, res) => {
  try {
    const param = req.body;
    const group = await listGroup(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, group.data, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getGroupDetails = async (req, res) => {
  try {
    const param = { ...req.params, ...req.body };
    const group = await getGroupDetails(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, group.data, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const param = { ...req.query, ...req.body };
    const group = await deleteGroup(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, null, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.updateGroup = async (req, res) => {
  try {
    const param = req.body;
    const group = await updateGroup(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, null, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
