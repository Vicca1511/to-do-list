const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {

    nome: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,

    }
});

const Task = mongoose.model('Tasks', TaskSchema);

module.exports = Task;
