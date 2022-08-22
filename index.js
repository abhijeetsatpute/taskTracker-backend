const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const taskRoute = require("./routes/task");

const PORT = 3030;
const MONGODB_URI =
  "mongodb+srv://abhi:ninja123@cluster0.klypvcs.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(bodyParser.json());
app.use(taskRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, function () {
      console.log(`listening on port ${this.address().port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
