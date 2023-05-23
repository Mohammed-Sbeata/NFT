const { Router } = require('express');
const { login, signup } = require('../../controllers/user');

const userRouter = Router();

userRouter.post('/signup', signup);

userRouter.post('/login', login);

module.exports = userRouter;
