const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.addGroup = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    name: Joi.string().alphanum().max(20).required(),
    contacts: Joi.array().required(),
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
    name: Joi.string().alphanum().max(30).required(),
    contacts: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
