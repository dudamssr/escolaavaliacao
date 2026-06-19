const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {

    const dados = req.body;

    const turma = await prisma.turma.create({
        data: dados
    });

    res.status(201).json(turma);
};

const listar = async (req, res) => {

    const professorId = Number(req.params.professorId);

    const lista = await prisma.turma.findMany({
        where: {
            professorId
        }
    });

    res.status(200).json(lista);
};
const buscar = async (req, res) => {

    const id = Number(req.params.id);

    const turma = await prisma.turma.findUnique({
        where: {
            id
        },
        include: {
            atividades: true
        }
    });

    res.status(200).json(turma);
};


const excluir = async (req, res) => {

    const id = Number(req.params.id);

    const atividades = await prisma.atividade.findMany({
        where: {
            turmaId: id
        }
    });

    if (atividades.length > 0) {
        return res.status(400).json({
            mensagem: "Você não pode excluir uma turma com atividades cadastradas"
        });
    }

    const turma = await prisma.turma.delete({
        where: {
            id
        }
    });

    res.status(200).json(turma);
};
module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir
};
