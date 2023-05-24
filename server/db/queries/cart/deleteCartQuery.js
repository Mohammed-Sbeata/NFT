const connection = require('../../config/connection');

const deleteCartQuery = (userId, cartId) => {
  const sql = {
    text: 'DELETE FROM cart WHERE userId = $1 AND productId = $2 RETURNING * ',
    values: [userId, cartId],
  };
  return connection.query(sql);
};

module.exports = deleteCartQuery;