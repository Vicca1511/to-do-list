const Tasks = require('../models/Task')

const findAllTasksService = async () => {

  const tasks = await Tasks.find();

  return tasks;
};

const findByIdTaskService = async (idParam) => {
  const task = await Tasks.findById(idParam);
  return task;

};

const createTaskService = (newTask) => {
  const newId = Tasks.length + 1;
  newTask.id = newId;
  tasks.push(newTask);
  return newTask;
};

const updateTaskService = (id, taskEdition) => {
  taskEdition['id'] = id;
  const taskIndex = tasks.findIndex((task) => task.id == id);
  tasks[taskIndex] = taskEdition
  return taskEdition;

};

const deleteTaskService = (id) => {
  tasks.forEach((task, index) => {
    if (task.id == id) {
      tasks.splice(index, 1);
    }
  });
}




module.exports = {

  findAllTasksService,
  findByIdTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService

};



