
const express = require("express");

const router = express.Router();

const {
    cadastrar,
    listar,
    listarPorProfessor
} = require("../controllers/atividades.controller");

router.post("/atividade/cadastrar", cadastrar);
router.get("/atividade/listar/:turmaId", listar);
router.get("/atividade/listar-professor/:professorId",listarPorProfessor);

module.exports = router;