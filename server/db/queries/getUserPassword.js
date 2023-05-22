const connection = require("../config/connection");

const getUserPassword = (username) => {
  sql = {
    text: "SELECT id, username, password  FROM users WHERE username = $1;",
    values: [username],
  };
  return connection.query(sql);
};

module.exports = getUserPassword;
