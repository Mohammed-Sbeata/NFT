const connection = require('../config/connection');

const getAllPostsQuery = (userId, pageNumber, itemsSize) => {
  const sql = {
    text: `select products.*, likes
      from products left join cart
      on products.id = cart.productId and cart.userId = $1
      offset $2 limit $3;`,
    values: [userId, pageNumber, itemsSize],
  };
  return connection.query(sql);
};
module.exports = getAllPostsQuery;
