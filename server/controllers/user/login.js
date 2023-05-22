/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const { loginSchema } = require("../../utils/validation");
const getUserPassword = require("../../db/queries/getUserPassword");
const { generateToken } = require("../../utils/jwt");
require("dotenv").config();

const login = (req, res, next) => {
  const { username, password } = req.body;
  const { error, value } = loginSchema
    .validateAsync(
      {
        username,
        password,
      },
      { abortEarly: false }
    )
    .then(() => getUserPassword(username))
    .then((data) => {
      if (data.rowCount) {
        req.userdb = data.rows[0];
        return data.rows[0].password;
      }
    })
    .then((hasedPassword) => bcrypt.compare(password, hasedPassword))
    .then((isMatch) => {
      if (!isMatch) {
        console.log(isMatch);
        return res.status(400).json({ message: "passwords not matched" });
      }
      const { id, username } = req.userdb;
      return { id, username };
    })
    .then((data) => generateToken(data))
    .then((token) => {
      res
        .cookie("token", token)
        .status(201)
        .json({ message: "Log successfully 👌" });
    })
    .catch((err) => console.log(err));
};

module.exports = login;
