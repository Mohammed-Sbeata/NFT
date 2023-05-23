const { Router } = require('express');
const { addProduct } = require('../../controllers/product');

const productRouter = Router();

productRouter.post('/product', addProduct);

module.exports = productRouter;
