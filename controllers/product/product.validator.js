const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.addProduct = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    name: Joi.string().max(30).required(),
    details: Joi.string().max(150).required(),
    unit: Joi.string().max(10).required(),
    price: Joi.number().required(),
    inventory: Joi.string().max(15).required(),
    category: Joi.string().max(15).required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updateGroup = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    groupId:Joi.string().required(),
    name: Joi.string().max(30).required(),
    contacts: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
