const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.locationSharing = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    message: Joi.string().max(50).required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    contacts: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};