const routes = require('express').Router();
const controllerTasks = require('../controllers/task.controller');


routes.get('/allTasks', controllerTasks.findAllTasksController);
routes.get('/task/:id', controllerTasks.findByIdTaskController);
routes.post('/create', controllerTasks.createTaskController);
routes.put('/update/:id', controllerTasks.updateTaskController);
routes.delete('/delete/:id', controllerTasks.deleteTaskController);

module.exports = routes;
