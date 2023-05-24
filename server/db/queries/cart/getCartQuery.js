const connection = require('../../config/connection');

const getCartQuery = (userId) => {
  const sql = {
    text: 'SELECT products.id, products.title, products.image, products.price, cart.userId FROM products JOIN cart ON products.id = cart.productId WHERE cart.userId = $1',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getCartQuery;
