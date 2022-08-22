const express = require('express');

const taskController = require('../controllers/task');

const router = express.Router();

router.get('/tasks', taskController.getTasks);

router.post('/task', taskController.postAddTask);

router.delete('/task/:id', taskController.deleteTask);

module.exports = router;