const { Router } = require('express');
const { login, signup } = require('../../controllers/user');
const products = require('../../controllers/user/products');

const userRouter = Router();
userRouter.post('/signup', signup);
userRouter.get('/main', products);
userRouter.post('/login', login);

module.exports = userRouter;
