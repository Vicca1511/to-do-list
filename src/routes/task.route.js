const routes = require('express').Router();
const controllerTasks = require('../controllers/task.controller');


routes.get('/', controllerTasks.findAllTasksController);
routes.get('/:id', controllerTasks.findByIdTaskController);
routes.post('/', controllerTasks.createTaskController);
routes.put('/:id', controllerTasks.updateTaskController);
routes.delete('/:id', controllerTasks.deleteTaskController);

module.exports = routes;
