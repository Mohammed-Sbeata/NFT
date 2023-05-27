const getProductsQuery = require('../../db/queries/getProductsQuery');
const getProductsNuberQuery = require('../../db/queries/getProductsNuberQuery');

const products = (req, res, next) => {
  const { id, role } = req.user;
  const itemsSize = 5;
  const pageNumber = (req.query.page * 5) || 0;

  getProductsNuberQuery()
    .then((data) => {
      req.totalItems = data.rows[0].total_items;
      return getProductsQuery(id, pageNumber, itemsSize);
    })
    .then((allData) => res.status(200).json({ status: 200, message: 'You have all data to public page succesfully', allData: allData.rows, role, totalItems: req.totalItems }))
    .catch((err) => next(err));
};

module.exports = products;
