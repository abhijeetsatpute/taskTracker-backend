const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
    Task.find()
        .then(tasks => {
            res.send(tasks)
        })
        .catch(err => console.log(err))
}

exports.postAddTask = (req, res, next) => {
    const task = new Product({
        name: name,
        price: price,
        date: date,
        reminder: reminder
      });
}

exports.deleteTask = (req, res, next) => {
    res.status(200)
    .send('Hello, world!');
}
