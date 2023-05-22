/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { loginSchema } = require('../../utils/validation');
const getUserPassword = require('../../db/queries/getUserPassword');
const { generateToken } = require('../../utils/jwt');
require('dotenv').config();

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    await loginSchema.validateAsync(
      {
        username,
        password,
      },
      { abortEarly: false }
    );

    const data = await getUserPassword(username);

    if (data.rowCount) {
      const storedPassword = data.rows[0].password;

      const isMatch = await bcrypt.compare(password, storedPassword);

      if (!isMatch) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }

      const { id, username: storedUsername } = data.rows[0];

      const token = generateToken({ id, username: storedUsername });

      res
        .cookie('token', token)
        .status(200)
        .json({ message: 'Login successful 👌' });
    } else {
      res.status(400).json({ message: 'User not found' });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = login;
