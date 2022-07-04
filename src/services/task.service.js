const Tasks = require('../models/Task')

const findAllTasksService = async () => {

  const alltasks = await Tasks.find();
  return alltasks;
};

const findByIdTaskService = async (idParam) => {
  const task = await Tasks.findById(idParam);
  return task;

};

const createTaskService = async (newTask) => {

  const taskOriginated = await Tasks.create(newTask);
  return taskOriginated;
};

const updateTaskService = async (id, taskEdition) => {
  const taskUpdate = await Tasks.findByIdAndUpdate(id, taskEdition).setOptions({
    returnOriginal: false,
  });
  return taskUpdate;

};

const deleteTaskService = async (id) => {
  return await Tasks.findByIdAndDelete(id);
}




module.exports = {

  findAllTasksService,
  findByIdTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService

};



