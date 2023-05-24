const postCartQuery = require('../../db/queries/cart/postCartQuery');

const postCart = (req, res, next) => {
  const userId = req.user.id;
  const { productId } = req.body;
  postCartQuery(userId, productId)
    .then((data) => res.json({
      error: false,
      message: 'Item added to cart successfully',
      data: data.rows,
    }))
    .catch((error) => next(error));
};
module.exports = postCart;
