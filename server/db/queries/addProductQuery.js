const connection = require('../config/connection');

const addProductQuery = (title, image, price) => {
  const sql = {
    text: `
    INSERT INTO products (title, image, price) VALUES ($1, $2, $3) RETURNING *;
    `,
    values: [title, image, price],
  };
  return connection.query(sql);
};

module.exports = addProductQuery;
