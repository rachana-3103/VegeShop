const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");
const { min } = require("lodash");

exports.addlocationValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    name: Joi.string().max(30).required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updatelocationValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    locationId: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    name: Joi.string().max(30).required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
