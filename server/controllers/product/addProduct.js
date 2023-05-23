const addProductQuery = require('../../db/queries/addProductQuery');

const addProduct = (req, res) => {
  const { title, image, price } = req.body;

  addProductQuery(title, image, price)
    .then(() => res.json({ message: 'add product success' }))
    .catch(() => res.status(401).json({ message: 'something went wrong' }));
};

module.exports = addProduct;
