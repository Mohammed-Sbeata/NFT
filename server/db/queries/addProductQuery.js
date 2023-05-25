const connection = require('../config/connection');

const addProductQuery = (title, image, price, userId) => {
  const sql = {
    text: `
    INSERT INTO products (title, image, price, userId) VALUES ($1, $2, $3, $4) RETURNING *;
    `,
    values: [title, image, price, userId],
  };
  return connection.query(sql);
};

module.exports = addProductQuery;
