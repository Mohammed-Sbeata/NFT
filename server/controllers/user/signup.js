/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const { signupSchema } = require("../../utils/validation");
const userSignupQuery = require("../../db/queries/signupQuery");
const { generateToken } = require("../../utils/jwt");
require("dotenv").config();

const signup = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  const { error, value } = signupSchema
    .validateAsync(
      {
        username,
        email,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    )
    .then(() => bcrypt.hash(password, 10))
    .then((hash) => userSignupQuery({ username, email, password: hash }))
    .then((data) => {
      const { id, username } = data.rows[0];
      return { id, username };
    })
    .then((data) => generateToken(data))
    .then((token) => {
      res
        .cookie("token", token)
        .status(201)
        .json({ message: "Sign up successfully 👌" });
    })
    .catch((err) => console.log(err));
};

module.exports = signup;
