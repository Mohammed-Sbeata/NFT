const deleteCartQuery = require('../../db/queries/cart/deleteCartQuery');

const deleteCart = (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  deleteCartQuery(userId, id)
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }).catch((error) => next(error));
};

module.exports = deleteCart;
