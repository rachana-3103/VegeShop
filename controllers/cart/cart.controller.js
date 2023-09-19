const { successResponse, errorResponse } = require("../../helpers/helpers");
const { isEmpty } = require("lodash");

const {
  addCart,
  listOrder,
  getOrderDetails,
  cancelOrder,
  updateGroup,
} = require("./cart.helper");

exports.addCart = async (req, res) => {
  try {
    const param = req.body;
    if (isEmpty(param)) {
      return errorResponse(req, res, "Something Went Wrong", 400);
    }
    const cart = await addCart(param);
    if (!isEmpty(cart) && cart.err) {
      return errorResponse(req, res, cart.msg, 400);
    }
    return successResponse(req, res, cart.data, cart.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.listOrder = async (req, res) => {
  try {
    const products = await listOrder(req);
    if (!isEmpty(products) && products.err) {
      return errorResponse(req, res, products.msg, 400);
    }
    return successResponse(req, res, products.data, products.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const param = { ...req.params , ...req.body};
    const order = await getOrderDetails(param);
    if (!isEmpty(order) && order.err) {
      return errorResponse(req, res, order.msg, 400);
    }
    return successResponse(req, res, order.data, order.msg);
  } catch (error) {
    return errorResponse(req, res, error, 400);
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const param = {...req.body };
    const order = await cancelOrder(param);
    if (!isEmpty(order) && order.err) {
      return errorResponse(req, res, order.msg, 400);
    }
    return successResponse(req, res, null, order.msg);
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
