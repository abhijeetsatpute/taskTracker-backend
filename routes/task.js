const express = require('express');

const taskController = require('../controllers/task');

const router = express.Router();

router.get('/tasks', taskController.getTasks);

router.get('/tasks/:id', taskController.getTask);

router.post('/tasks', taskController.postAddTask);

router.delete('/tasks/:id', taskController.deleteTask);

router.put('/tasks/:id', taskController.putTask);

module.exports = router;