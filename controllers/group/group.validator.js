const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.addGroupValidator = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    name: Joi.string().alphanum().required(),
    contacts: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updateGroupValidator = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    groupId:Joi.string().required(),
    name: Joi.string().alphanum().required(),
    contacts: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
