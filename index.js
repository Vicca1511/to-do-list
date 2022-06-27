const express = require('express');
const routes = require('./src/routes/task.route');
const cors = require('cors');


const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/tasks' , routes);







app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

