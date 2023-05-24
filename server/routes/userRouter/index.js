const { Router } = require('express');
const { login, signup } = require('../../controllers/user');
const products = require('../../controllers/user/products');
const checkAuth = require('../../middleware/checkAuth');

const userRouter = Router();

userRouter.post('/signup', signup);

userRouter.get('/main', checkAuth, products);

userRouter.post('/login', login);

module.exports = userRouter;
