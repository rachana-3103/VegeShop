const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.signupValidator = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(15).required(),
    password: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*]{8,16}$/))
      .required(),
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().max(5).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    }),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.loginValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.refreshValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    refreshToken: Joi.string().required(),
  });

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.forgotValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    phoneNumber: Joi.string().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.resetValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    newPassword: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*]{8,16}$/))
      .required(),
    confirmPassword: Joi.ref("newPassword"),
  }).with("newPassword", "confirmPassword");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.codeVerifyValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    code: Joi.string().max(6).required(),
    phoneNumber: Joi.string().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
