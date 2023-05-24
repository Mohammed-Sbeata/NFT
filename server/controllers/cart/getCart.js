const getCartQuery = require('../../db/queries/cart/getCartQuery');

const getCart = (req, res, next) => {
  const { id } = req.user;
  console.log(id, 'iddd');
  getCartQuery(id)
    .then((data) => res.json({
      error: false,
      message: 'Fetch data successfully',
      data: data.rows,
    })).catch((error) => next(error));
};
module.exports = getCart;
