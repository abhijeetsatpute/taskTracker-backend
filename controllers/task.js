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
    Task.findById(taskId)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => console.log(err))
}

// POST add tasks
exports.postAddTask = (req, res, next) => {
    const task = new Task({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    });
    task.save()
        .then(result =>{
            res.status(201).json({
                text: req.body.text,
                day: req.body.day,
                reminder: req.body.reminder
            });
        })
        .catch(err => console.log(err))
}

// DELETE task by id
exports.deleteTask = (req, res, next) => {
    const taskId = req.params.id;
    Task.deleteOne({ _id: taskId})
        .then(task => {
            res.status(204).send(`TASK DELETED`);
        })
        .catch(err => console.log(err));
}

// UPDATE task by id
exports.putTask = (req, res, next) => {
    const taskId = req.params.id;
    Task.findById(taskId)
        .then(task => {
            task.reminder = !task.reminder
            task.save();
            return task;
        })
        .then(task =>{
            res.status(204).json({
                task
            })
        })
        .catch(err => console.log(err))
}