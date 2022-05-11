const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");

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
      if (x.path[0] == "password" && x.type == "string.pattern.base") {
        x.message =
          "Password must have 8 characters including capital letters and symbols.";
      }
      object.push({ error: x.message });
    })}`;
    return object;
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
