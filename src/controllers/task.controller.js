const tasksService = require('../services/task.service');
const mongoose = require('mongoose');

const findAllTasksController = async (req, res) => {
    const alltasks = await tasksService.findAllTasksService();
    if (alltasks.length == 0) {
        return res.status(404).send({ message: "Task not found!" })
    }
    res.send(alltasks);
};

const findByIdTaskController = async (req, res) => {
    const idParam = req.params.id;
    const selectedTask = await tasksService.findByIdTaskService(idParam);
    if (!selectedTask) {
        return res.status(404).send({ message: "Task not found!" })
    }
    res.send(selectedTask);
}

const createTaskController = async (req, res) => {
    const task = req.body;
    const newTask = await tasksService.createTaskService(task);
    res.status(201).send(newTask);

}

const updateTaskController = async (req, res) => {
    const idParam = req.params.id;
    const task = req.body;
    if (!idParam) {
        return res.status(404).send({ message: "Task not found!" })
    }
    const updatedTask = await tasksService.updateTaskService(idParam, task);
    res.send(updatedTask);

}
const deleteTaskController = async (req, res) => {
    const idParam = req.params.id;
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
