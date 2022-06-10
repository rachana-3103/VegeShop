const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const { sendFaq } = require("./faq.helper");

exports.sendFaq = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const faq = await sendFaq(param);
    if (!isEmpty(faq) && faq.err) {
      return errorResponse(req, res, faq.msg, 400);
    }
    return successResponse(req, res, faq.data, faq.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};
