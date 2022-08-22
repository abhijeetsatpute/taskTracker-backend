const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true},
    date: { type: String},
    reminder: { type: Boolean}
});

module.exports = mongoose.model("Task", taskSchema);
