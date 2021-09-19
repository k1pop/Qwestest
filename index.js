const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use("/person", postsRoutes);

app.listen(5500, () => console.log("Server started: 5500"));
