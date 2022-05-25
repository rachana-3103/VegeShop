const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.addSafetyPlan = async (req, res, next) => {
  const param = { ...req.body };

  if (typeof param.coverRadius !== "number") {
    return errorResponse(
      req,
      res,
      "Cover Radius must be a Number type value.",
      400
    );
  }
  const schema = Joi.object({
    name: Joi.string().max(30).required(),
    locationId: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    coverRadius: Joi.number().integer(),
    personName: Joi.array(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    help: Joi.array().required(),
    checkInOut: Joi.array().required(),
  })
    .xor("latitude", "locationId")
    .with("latitude", "longitude");

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updateSafetyPlan = async (req, res, next) => {
  const param = { ...req.body };

  if (typeof param.coverRadius !== "number") {
    return errorResponse(
      req,
      res,
      "Cover Radius must be a Number type value.",
      400
    );
  }
  const schema = Joi.object({
    safetyPlanId: Joi.string().required(),
    name: Joi.string().max(30).required(),
    locationId: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    coverRadius: Joi.number().integer(),
    personName: Joi.array(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    help: Joi.array().required(),
    checkInOut: Joi.array().required(),
  })
    .xor("latitude", "locationId")
    .with("latitude", "longitude");

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.safetyPlanStatus = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    safetyPlanId: Joi.string().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.alertSafetyPlan = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    group: Joi.array().required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
