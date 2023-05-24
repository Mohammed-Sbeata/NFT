const { Router } = require('express');
const { postCart, getCart, deleteCart } = require('../../controllers/cart');

const cartRouter = Router();

cartRouter.get('/getCart', getCart);
cartRouter.delete('/deleteCart/:id', deleteCart);
cartRouter.post('/postCart', postCart);

module.exports = cartRouter;