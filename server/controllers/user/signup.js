/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { signupSchema } = require('../../utils/validation');
const userSignupQuery = require('../../db/queries/signupQuery');
const generateToken = require('../../utils/jwt');

const signup = (req, res, next) => {
  const {
    username, email, password, confirmPassword,
  } = req.body;
  const { SALT_ROUNDS } = process.env;
  const { error, value } = signupSchema
    .validateAsync(
      {
        username,
        email,
        password,
        confirmPassword,
      },
      { abortEarly: false },
    ).then(() => bcrypt.hash(password, SALT_ROUNDS))
    .then((hash) => ({ username, email, password: hash }))
    .then((data) => userSignupQuery(data))
    .then((data) => data.rows[0])
    .then((data) => generateToken(data))
    .then((token) => {
      res.cookie('token', token)
        .status(201)
        .json({ message: 'Sign up successfully 👌' });
    })
    .catch((err) => console.log(err));
};

module.exports = signup;
