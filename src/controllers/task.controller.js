const tasksService = require('../services/task.service');

const findAllTasksController = (req, res) => {
    const tasks = tasksService.findAllTasksService();
    res.send(tasks);

}
const findByIdTaskController = (req, res) => {
    const idParam = Number(req.params.id);
    const selectedTask = tasksService.findByIdTaskService(idParam);
    res.send(selectedTask);
}

const createTaskController = (req, res) => {
    const task = req.body;
    const newTask = tasksService.createTaskService(task);
    res.send(newTask);
}

const updateTaskController = (req, res) => {
    const idParam = Number(req.params.id);
    const taskEdition = req.body;
    const updatedTask = tasksService.updateTaskService(idParam, taskEdition);
    res.send(updatedTask);

}
const deleteTaskController = (req, res) => {
    const id = req.params.id;
    res.send(tasksService.deleteTaskService(id));
   
   
    // const idParam = req.params.id;
    // tasksService.deleteTaskService(idParam);
    // return ( { message: 'Task deletada com sucesso!'});
}


module.exports = {
    findAllTasksController,
    findByIdTaskController,
    createTaskController,
    updateTaskController,
    deleteTaskController,


} 
