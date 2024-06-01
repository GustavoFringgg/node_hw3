var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const handleSuccess = require("./utils/handleSuccess");
const handleError = require("./utils/handleError");

//router引入
var postsRouter = require("./routes/post");
//mongodb引入
require("./connections");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/posts", postsRouter);

app.use((err, req, res, next) => {
  handleError(res, err.message || "內部服務器錯誤");
});

module.exports = app;
