const express = require("express");

const router = express.Router();

const {
    login,
    listar,
    cadastrar
} = require("../controllers/professores.controller");

router.post("/professor/login", login);
router.get("/professor/listar", listar);
router.post("/professor/cadastrar", cadastrar);
module.exports = router;
