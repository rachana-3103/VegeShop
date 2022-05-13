const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");

exports.validateRequest = (param, schema) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const { error } = schema.validate(param, options);

  if (error) {
    let object = [];
    `${error.details.map((x) => {
      if (
        (x.path[0] == "password" || x.path[0] == "newPassword") &&
        x.type == "string.pattern.base"
      ) {
        x.message =
          "Password must have 8 characters including capital letters and symbols.";
      }
      object.push({ error: x.message });
    })}`;
    return object;
  }
};

exports.signupValidator = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(10).required(),
    surname: Joi.string().alphanum().min(3).max(10).required(),
    password: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*]{8,16}$/))
      .required(),
    confirmPassword: Joi.ref("password"),
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().max(5).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    }),
  }).with("password", "confirmPassword");

  const error = this.validateRequest(param, schema);
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
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = this.validateRequest(param, schema);

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

  const error = this.validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.forgotValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = this.validateRequest(param, schema);

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

  const error = this.validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.codeVerifyValidator = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    code: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    countryCode: Joi.string().max(5).required(),
  }).with("phoneNumber", "countryCode");

  const error = this.validateRequest(param, schema);
  
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
