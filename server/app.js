const express = require('express');
const { join } = require('path');

const parser = require('cookie-parser');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');
module.exports = app;
