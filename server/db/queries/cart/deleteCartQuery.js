const connection = require('../../config/connection');

const deleteCartQuery = (userId, cartId) => {
  const sql = {
    text: 'DELETE FROM products WHERE userId = $1 AND id = $2 RETURNING * ',
    values: [userId, cartId],
  };
  return connection.query(sql);
};

module.exports = deleteCartQuery;