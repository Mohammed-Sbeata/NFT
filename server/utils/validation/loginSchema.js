const Joi = require("joi");

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).max(30).required(),
});

module.exports = loginSchema;
