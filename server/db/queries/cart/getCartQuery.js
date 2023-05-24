const connection = require('../../config/connection');

const getCartQuery = (userId) => {
  const sql = {
    text: 'SELECT products.id, products.title, products.image, products.price, products.userId FROM products WHERE products.userId = $1',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getCartQuery;
