const connection = require('../config/connection');

const getAllPostsQuery = (userId) => {
  const sql = {
    text: `select products.*, likes
    from products left join cart
    on products.id = cart.productId and cart.userId = $1;`,
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = getAllPostsQuery;
