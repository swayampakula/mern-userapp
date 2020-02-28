var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// CORS Handling

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With,  Content-Type, Accept"
  // );
  next();
});

mongoose
  .connect("mongodb://localhost:27017/sampleapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to sampleapp");
  })
  .catch(err => {
    console.log(err.message);
  });

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
