const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        console.log("BODY RECEBIDO:", req.body);

        const atividade = await prisma.atividade.create({
            data: {
                descricao: req.body.descricao,
                turmaId: Number(req.body.turmaId)
            }
        });

        return res.status(201).json(atividade);

    } catch (err) {
        console.log("ERRO CREATE ATIVIDADE:", err);
        return res.status(500).json({ erro: "Erro ao criar atividade" });
    }
};

const listar = async (req, res) => {
    try {
        console.log("PARAM RECEBIDO:", req.params.turmaId);

        const turmaId = Number(req.params.turmaId);

        const lista = await prisma.atividade.findMany({
            where: { turmaId }
        });

        console.log("ATIVIDADES ENCONTRADAS:", lista);

        return res.status(200).json(lista);

    } catch (err) {
        console.log("ERRO LISTAR:", err);
        return res.status(500).json({ erro: "Erro ao listar atividades" });
    }
};

const listarPorProfessor = async (req, res) => {
    try {
        const professorId = Number(req.params.professorId);

        const lista = await prisma.atividade.findMany({
            where: {
                turma: {
                    professorId: professorId
                }
            },
            include: {
                turma: true
            }
        });

        return res.status(200).json(lista);

    } catch (err) {
        console.log("ERRO LISTAR POR PROFESSOR:", err);
        return res.status(500).json({
            erro: "Erro ao listar atividades do professor"
        });
    }
};

module.exports = {
    cadastrar,
    listar,
    listarPorProfessor
};
