const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  addProduct,
  listProduct,
  getProductDetails,
  deleteGroup,
  updateGroup,
} = require("./product.helper");

exports.addProduct = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const product = await addProduct(param);
    if (!isEmpty(product) && product.err) {
      return errorResponse(req, res, product.msg, 400);
    }
    return successResponse(req, res, product.data, product.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.listProduct = async (req, res) => {
  try {
    const products = await listProduct(req);
    if (!isEmpty(products) && products.err) {
      return errorResponse(req, res, products.msg, 400);
    }
    return successResponse(req, res, products.data, products.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const param = { ...req.params};
    const product = await getProductDetails(param);
    if (!isEmpty(product) && product.err) {
      return errorResponse(req, res, product.msg, 400);
    }
    return successResponse(req, res, product.data, product.msg);
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
