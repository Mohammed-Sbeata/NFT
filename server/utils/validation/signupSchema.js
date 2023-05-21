const Joi = require('joi');

const signupSchema = Joi({
  username: Joi.string().Joi.string()
    .pattern(/^[a-zA-Z0-9]+$/).required(),
  email: Joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  password: Joi.string().min(8).max(30).pattern(/^[a-zA-Z0-9._#?!-@]+$/)
    .required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = signupSchema;
