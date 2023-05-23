/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { signupSchema } = require('../../utils/validation');
const userSignupQuery = require('../../db/queries/signupQuery');
const { generateToken } = require('../../utils/jwt');
require('dotenv').config();

const signup = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  signupSchema
    .validateAsync(
      {
        username,
        email,
        password,
        confirmPassword,
      },
      { abortEarly: false },
    )
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => userSignupQuery({ username, email, password: hash }))
    .then((data) => generateToken(data.rows[0]))
    .then((token) => {
      res
        .cookie('token', token)
        .status(201)
        .json({ message: 'Sign up successfully 👌' });
    })
    .catch((err) => next(err));
};

module.exports = signup;
