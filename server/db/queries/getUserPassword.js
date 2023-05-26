const connection = require('../config/connection');

const getUserPassword = (username) => {
  const sql = {
    text: 'SELECT id, username, password, role  FROM users WHERE username = $1;',
    values: [username],
  };
  return connection.query(sql);
};

module.exports = getUserPassword;
