const mongoose = require('mongoose');

const idValidation = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: "ID nonexistent!" })
    }
    next();


}
const bodyObjectValidation = (req, res, next) => {
    const task = req.body;
    if (!task || !task.nome || !task.descricao) {

        return res.status(400).send({ message: 'You must create a task with all requeriments.' });

    }
    next();

}

module.exports = {
    
    idValidation,
    bodyObjectValidation,

}
