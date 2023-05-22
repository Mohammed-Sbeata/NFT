require("dotenv").config();
const express = require("express");
const { join } = require("path");

const parser = require("cookie-parser");
const userRouter = require("./routes/userRouter");

// eslint-disable-next-line import/no-extraneous-dependencies
const app = express();
app.set("PORT", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable("x-powered-by");

app.use("/api", userRouter);

module.exports = app;
