const Task = require('../models/task');

// GET all tasks
exports.getTasks = (req, res, next) => {
    Task.find()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => console.log(err))
}

// GET single tasks from id
exports.getTask = (req, res, next) => {
    const taskId = req.params.id;
    console.log(taskId);
    Task.findById(taskId)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => console.log(err))
}

exports.postAddTask = (req, res, next) => {
    const task = new Task({
        name: req.body.name,
        date: req.body.date,
        reminder: req.body.reminder
    });
    task.save()
        .then(result =>{
            res.status(201).json({
                name: req.body.name,
                date: req.body.date,
                reminder: req.body.reminder
            });
        })
        .catch(err => console.log(err))
}

exports.deleteTask = (req, res, next) => {

    res.status(200)
    .send('Hello, world!');
}

exports.putTask = (req, res, next) => {
    res.status(200)
    .send('Hello, world!');
}