/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { loginSchema } = require('../../utils/validation');
const getUserPassword = require('../../db/queries/getUserPassword');
const { generateToken } = require('../../utils/jwt');
require('dotenv').config();

const login = (req, res, next) => {
  const { username, password } = req.body;
  loginSchema
    .validateAsync(
      {
        username,
        password,
      },
      { abortEarly: false },
    )
    .then(() => getUserPassword(username))
    .then((data) => {
      if (data.rowCount) {
        req.userid = data.rows[0].id;
        return data.rows[0].password;
      }
      return res.status(401).json({ message: 'Wrong username or password' });
    })
    .then((hasedPassword) => bcrypt.compare(password, hasedPassword))
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(401).json({ message: 'Wrong username or password' });
      }
      const id = req.userid;
      return { id, username };
    })
    .then((data) => generateToken(data))
    .then((token) => {
      res
        .cookie('token', token)
        .status(201)
        .json({ message: 'Log in successfully 👌' });
    })
    .catch(() => res.status(401).json({ message: 'Wrong username or password' }));
};

module.exports = login;
