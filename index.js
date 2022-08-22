const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const taskRoute = require("./routes/task");

const PORT = 3030;
const MONGODB_URI =
  "mongodb+srv://abhi:ninja123@cluster0.klypvcs.mongodb.net/?retryWrites=true&w=majority";

const app = express();

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
