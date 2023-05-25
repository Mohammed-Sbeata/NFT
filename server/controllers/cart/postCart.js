const postCartQuery = require('../../db/queries/cart/postCartQuery');
const checkLikeQuery = require('../../db/queries/cart/checkLikeQuery');
const updateCartQuery = require('../../db/queries/cart/updateCartQuery');

const postCart = (req, res, next) => {
  const userId = req.user.id;
  const productId = req.body.id;
  console.log(userId, productId, 'iddd');

  checkLikeQuery(userId, productId)
    .then((data) => {
      console.log(data.rows, 'rows');
      if (data.rows.length) {
        if (data.rows[0].likes !== 'true') {
          return updateCartQuery(userId, productId, 'true');
        }
        return updateCartQuery(userId, productId, 'false');
      }
      return postCartQuery({ userId, productId });
    })
    .then((data) => res.json({
      error: false,
      message: 'Like added to cart successfully',
      data: data.rows,
    }))
    .catch((error) => next(error));
};

module.exports = postCart;
