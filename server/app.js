require('dotenv').config();
const express = require('express');

const parser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const checkAuth = require('./middleware/checkAuth');
const productRouter = require('./routes/productRouter');

// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
app.set('PORT', process.env.PORT || 5555);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');

app.use('/api', userRouter);
app.use('/api', productRouter);
app.use(checkAuth)
app.use('/api', cartRouter);


module.exports = app;
