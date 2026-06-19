require("dotenv").config();

const express = require("express");
const cors = require("cors");

const professorRotas = require("./src/routes/professores.routes");
const turmaRotas = require("./src/routes/turmas.routes");
const atividadeRotas = require("./src/routes/atividades.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(professorRotas);
app.use(turmaRotas);
app.use(atividadeRotas);

const porta =
process.env.PORT_APP || 3000;

app.listen(porta, () => {

    console.log(
        `Online na porta ${porta}`
    );

});
