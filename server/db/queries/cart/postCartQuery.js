const connection = require('../../config/connection');

const postCartQuery = ({ userId, productId }) => {
  const sql = {
    text: "INSERT INTO cart (userId, productId, likes) VALUES ($1, $2, 'true') RETURNING *;",
    values: [userId, productId],
  };
  return connection.query(sql);
};

module.exports = postCartQuery;
