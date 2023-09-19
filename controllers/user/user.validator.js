const { errorResponse } = require("../../helpers/helpers");
const Joi = require("joi");
const { validateRequest } = require("../../helpers/helpers");

exports.signup = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    password: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*\.?]{8,16}$/))
      .required(),
    contactNumber: Joi.number().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "in", "us","au"] },
      })
      .lowercase(),
    address: Joi.string().min(3).max(30).required(),
  });

  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.login = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in", "us","au"] },
    })
    .lowercase(),
    password: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*\.?]{8,16}$/))
      .required(),
  }).with("email", "password");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.refresh = async (req, res, next) => {
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

exports.forgot = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in", "us","au"] },
    })
    .lowercase(),
  });

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.reset = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    newPassword: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*\.?]{8,16}$/))
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

exports.changePassword = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    currentPassword: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*\.?]{8,16}$/))
      .required(),
    newPassword: Joi.string()
      .regex(new RegExp(/^[a-zA-Z0-9!@#$%&*\.?]{8,16}$/))
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

exports.codeVerify = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    code: Joi.string().min(6).required(),
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

exports.updateCode = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    oldCountryCode: Joi.string().max(5).required(),
    oldPhoneNumber: Joi.string().required(),
    newCountryCode: Joi.string().max(5).required(),
    newPhoneNumber: Joi.string().required(),
  })
    .with("oldCountryCode", "oldPhoneNumber")
    .with("newCountyCode", "newPhoneNumber");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updateNumber = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    countryCode: Joi.string().max(5).required(),
    phoneNumber: Joi.string().required(),
    code: Joi.string().min(6).required(),
  }).with("countyCode", "phoneNumber");

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.deviceTokenUpdate = async (req, res, next) => {
  const param = { ...req.body };

  const schema = Joi.object({
    deviceToken: Joi.string().required(),
  });

  const error = validateRequest(param, schema);

  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.updateProfile = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "in", "us","au"] },
      })
      .lowercase(),
    contactNumber: Joi.number().required(),
    address: Joi.string().min(3).max(30).required(),
  });
  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};

exports.settings = async (req, res, next) => {
  const param = { ...req.body };
  const schema = Joi.object({
    htmlType: Joi.string().required(),
    value: Joi.string(),
  });
  const error = validateRequest(param, schema);
  if (error) {
    return errorResponse(req, res, error, 400);
  } else {
    return next();
  }
};
