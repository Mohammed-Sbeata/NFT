const connection = require('../config/connection');

const getProductsNuberQuery = () => {
  const sql = {
    text: `SELECT COUNT(*) AS total_items
      FROM products;`,
    values: [],
  };
  return connection.query(sql);
};
module.exports = getProductsNuberQuery;
