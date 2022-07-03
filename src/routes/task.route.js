const routes = require('express').Router();
const controllerTasks = require('../controllers/task.controller');
const { idValidation, bodyObjectValidation } = require('../middlewares/task.middleware');


routes.get('/',controllerTasks.findAllTasksController);
routes.get('/:id', idValidation , controllerTasks.findByIdTaskController);
routes.post('/',bodyObjectValidation, controllerTasks.createTaskController);
routes.put('/:id', idValidation, bodyObjectValidation , controllerTasks.updateTaskController);
routes.delete('/:id', idValidation, controllerTasks.deleteTaskController);

module.exports = routes;
