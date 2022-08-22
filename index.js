const express = require("express");
const mongoose = require("mongoose");

const taskRoute = require("./routes/task");

const PORT = 80;
const MONGODB_URI =
  "mongodb+srv://abhi:ninja123@cluster0.klypvcs.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(taskRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, function () {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
