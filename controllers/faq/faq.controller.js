const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const { sendFaq } = require("./faq.helper");

exports.sendFaq = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const group = await sendFaq(param);
    if (!isEmpty(group) && group.err) {
      return errorResponse(req, res, group.msg, 400);
    }
    return successResponse(req, res, group.data, group.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
