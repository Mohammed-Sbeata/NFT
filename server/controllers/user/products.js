const getProductsQuery = require('../../db/queries/getProductsQuery');

const products = (req, res, next) => {
  const { role } = req.user;
  getProductsQuery().then((allData) => {
    res.status(200).json({ status: 200, message: 'You have all data to public page succesfully', allData: allData.rows, role });
  }).catch((err) => next(err));
};

module.exports = products;
