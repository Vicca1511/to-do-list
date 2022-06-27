const tasks = [{

    id: 1,
    nome: 'Tarefa',
    descricao: 'Finalizar projeto Um',
  },
  {
    id: 2,
    nome: 'Tarefa',
    descricao: 'Finalizar projeto Um',
  }
  ];

const findAllTasksService = () => {
     
  return tasks;
}

const findByIdTaskService = (idParam) => {
    return tasks.find((task) => task.id === idParam);

}
const createTaskService = (newTask) => {
  const newId = tasks.length + 1;
  newTask.id = newId;
  tasks.push(newTask);
  return newTask;
}
const updateTaskService = (id, taskEdition) => {
  taskEdition['id'] = id;
  const taskIndex = tasks.findIndex((task) => task.id == id);
  tasks[taskIndex] = taskEdition
  return taskEdition;  

}
const deleteTaskService = (id) => { 
  tasks.forEach (( task, index ) => {
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
   


