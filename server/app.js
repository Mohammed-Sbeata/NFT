require('dotenv').config();
const express = require('express');
const { join } = require('path');

const parser = require('cookie-parser');
const signRouter = require('./routes/signup');

// eslint-disable-next-line import/no-extraneous-dependencies
console.log(process.env.SALT_ROUNDS)
const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');

app.use(signRouter);
module.exports = app;
