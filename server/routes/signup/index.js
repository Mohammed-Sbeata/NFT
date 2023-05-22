const { Router } = require('express');
const signup = require('../../controllers/user/signup');

const signRouter = Router();

signRouter.post('/api/signup', signup);

module.exports = signRouter;