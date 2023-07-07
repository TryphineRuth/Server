// require packages
const express = require("express");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");
// const authRoutes = require("./routes/authRoutes");
const User = require("./models/user.model");
// const bodyParser = require("body-parser");
const { signup, signin } = require("./controllers/auth.controller");
const port = 3000

// initialise express
const app = express();
app.use(express.json());

//  mondodb connect
mongoose
  .connect("mongodb+srv://admin:Truth@cluster0.69xowuj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
