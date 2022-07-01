const tasksService = require('../services/task.service');
const mongoose = require('mongoose');

const findAllTasksController = async (req, res) => {
    
    const tasks = await tasksService.findAllTasksService();
    
   
    if(tasks.length == 0) {
        return res.status(404).send({ message: "Task not found!" })
    }

        
    res.send(tasks);
};
const findByIdTaskController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: "ID nonexistent!" })
    }

    const selectedTask = await tasksService.findByIdTaskService(idParam);

    if (!selectedTask) {
        return res.status(404).send({ message: "Task not found!" })
    }
    res.send(selectedTask);
}

const createTaskController = async (req, res) => {
    const task = req.body;
    if (!task || !task.nome || !task.descricao) {

        return res.status(400).send({ message: 'You must create a task with all requeriments.' });

    }
    const newTask = await tasksService.createTaskService(task);

    res.status(201).send(newTask);

}

const updateTaskController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: "ID nonexistent!" })
    }
    
    const taskEdition = req.body;
    if (!idParam) {
        return res.status(404).send({ message: "Task not found!" })
    }

    if (!taskEdition || !taskEdition.nome || !taskEdition.descricao) {
        return res.status(400).send({ message: "Fill all fields!" });
    }
    const updatedTask = await tasksService.updateTaskService(idParam, taskEdition);
    res.send(updatedTask);

}
const deleteTaskController = async  (req, res) => {
    const idParam = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: "ID nonexistent!" })
    }

   
    await tasksService.deleteTaskService(idParam)

    res.send({ message: "Task deleted successfully!" });



}


module.exports = {
    findAllTasksController,
    findByIdTaskController,
    createTaskController,
    updateTaskController,
    deleteTaskController,


} 
