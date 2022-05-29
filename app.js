const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log("connection successful");
  }).catch((err)=> console.log("connection failed"))

//middleware

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};
app.get("/", (req, res) => {
  res.send("hello word from the server");
});

app.get("/about", middleware, (req, res) => {
  console.log("hello");
  res.send("hello word from the about");
});

app.get("/home", (req, res) => {
  res.send("hello word from the home");
});

app.get("/contactus", (req, res) => {
  res.send("hello word from the contactus");
});

app.get("/signup", (req, res) => {
  res.send("hello word from the signup");
});

app.get("/login", (req, res) => {
  res.send("hello word from the login");
});

app.get("/", (req, res) => {
  res.send("hello word from the server");
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
