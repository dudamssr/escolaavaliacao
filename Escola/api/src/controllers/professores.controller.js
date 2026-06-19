const prisma = require("../data/prisma");

const login = async (req, res) => {

    const { email, senha } = req.body;

    const professor = await prisma.professor.findFirst({
        where: {
            email,
            senha
        }
    });

    if (!professor) {
        return res.status(401).json({
            mensagem: "Login inválido"
        });
    }

    res.status(200).json(professor);
};

const listar = async (req, res) => {

    const lista = await prisma.professor.findMany();

    res.status(200).json(lista);
};
const cadastrar = async (req, res) => {

    const dados = req.body;

    const professor = await prisma.professor.create({
        data: dados
    });

    res.status(201).json(professor);
};
module.exports = {
    login,
    listar,
    cadastrar
};
