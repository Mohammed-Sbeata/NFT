const bcrypt = require('bcrypt');
const { signupSchema } = require('../../utils/validation');
const userSignupQuery = require('../../db/queries/signupQuery');
const { generateToken } = require('../../utils/jwt');
require('dotenv').config();

const signup = (req, res) => {
  const {
    username, email, password, confirmPassword,
  } = req.body;

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
    .then((data) => {
      const { id } = data.rows[0];
      return { id, username };
    })
    .then((data) => generateToken(data))
    .then((token) => {
      res
        .cookie('token', token)
        .status(201)
        .json({ message: 'Sign up successfully 👌' });
    })
    .catch(() => res.status(401).json({ message: 'Email or username already registered' }));
};

module.exports = signup;
