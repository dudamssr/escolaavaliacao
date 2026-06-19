const url = "http://localhost:3000";

const professor = JSON.parse(localStorage.getItem("professor"));


const formLogin = document.querySelector("#formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", async (e) => {

        e.preventDefault();

        try {

            const resposta = await fetch(
                url + "/professor/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email.value,
                        senha: senha.value
                    })
                }
            );

            if (!resposta.ok) {
                alert("Email ou senha inválidos");
                return;
            }

            const professorLogado = await resposta.json();

            localStorage.setItem(
                "professor",
                JSON.stringify(professorLogado)
            );

            window.location.href = "index2.html";

        } catch (erro) {

            console.log(erro);

            alert("Erro ao conectar com a API");
        }

    });

}


const listaTurmas = document.querySelector("#listaTurmas");

if (listaTurmas && professor) {

    document.querySelector("#nomeProfessor").innerHTML =
        "Professor: " + professor.nome;

    carregarTurmas();
}

function carregarTurmas() {

    fetch(
        url +
        "/turma/listar/" +
        professor.id
    )

    .then(res => res.json())

    .then(data => {

        listaTurmas.innerHTML = "";

        data.forEach(turma => {

            listaTurmas.innerHTML += `
                <tr>
                    <td>${turma.id}</td>
                    <td>${turma.nome}</td>

                    <td>
                        <button
                            class="btnVisualizar"
                            onclick="visualizarTurma(${turma.id})">
                            Visualizar
                        </button>

                        <button
                            class="btnExcluir"
                            onclick="excluirTurma(${turma.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;

        });

    })

    .catch((erro) => {

        console.log(erro);

        alert("Erro ao carregar turmas");

    });

}

function visualizarTurma(id) {

    localStorage.setItem("turmaId", id);

    window.location.href = "index3.html";
}

function excluirTurma(id) {

    if (!confirm("Tem certeza que deseja excluir esta turma?"))
        return;

    fetch(
        url +
        "/turma/excluir/" +
        id,
        {
            method: "DELETE"
        }
    )

    .then(res => res.json())

    .then(data => {

        if (data.mensagem) {
            alert(data.mensagem);
        }

        carregarTurmas();

    })

    .catch(() => {

        alert("Erro ao excluir turma");

    });

}

function abrirModalTurma() {

    document
        .querySelector("#modalTurma")
        .classList.remove("oculto");
}

function fecharModalTurma() {

    document
        .querySelector("#modalTurma")
        .classList.add("oculto");
}

const formTurma = document.querySelector("#formTurma");

if (formTurma && professor) {

    formTurma.addEventListener("submit", function (e) {

        e.preventDefault();

        const turma = {

            nome: nomeTurmaInput.value,
            professorId: professor.id

        };

        fetch(
            url + "/turma/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(turma)
            }
        )

        .then(res => res.json())

        .then(() => {

            alert("Turma cadastrada");

            formTurma.reset();

            fecharModalTurma();

            carregarTurmas();

        })

        .catch(() => {

            alert("Erro ao cadastrar turma");

        });

    });

}

const listaAtividades = document.querySelector("#listaAtividades");

const turmaId = localStorage.getItem("turmaId");

if (listaAtividades && professor) {

    document.querySelector("#nomeProfessor").innerHTML =
        "Professor: " + professor.nome;

    carregarNomeTurma();

    carregarAtividades();
}

function carregarNomeTurma() {

    fetch(
        url +
        "/turma/buscar/" +
        turmaId
    )

    .then(res => res.json())

    .then(turma => {

        document.querySelector("#nomeTurma").innerHTML =
            "Turma: " + turma.nome;

    })

    .catch(() => {

        document.querySelector("#nomeTurma").innerHTML =
            "Turma não encontrada";

    });

}

function carregarAtividades() {

    fetch(
        url +
        "/atividade/listar/" +
        turmaId
    )

    .then(res => res.json())

    .then(data => {

        listaAtividades.innerHTML = "";

        data.forEach(atividade => {

            listaAtividades.innerHTML += `
                <tr>
                    <td>${atividade.id}</td>
                    <td>${atividade.descricao}</td>
                </tr>
            `;

        });

    })

    .catch(() => {

        alert("Erro ao carregar atividades");

    });

}

function abrirModalAtividade() {

    document
        .querySelector("#modalAtividade")
        .classList.remove("oculto");
}

function fecharModalAtividade() {

    document
        .querySelector("#modalAtividade")
        .classList.add("oculto");
}

const formAtividade = document.querySelector("#formAtividade");

if (formAtividade) {

    formAtividade.addEventListener("submit", function (e) {

        e.preventDefault();

        const atividade = {

            descricao: descricao.value,
            turmaId: Number(turmaId)

        };

        fetch(
            url +
            "/atividade/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(atividade)
            }
        )

        .then(res => res.json())

        .then(() => {

            alert("Atividade cadastrada");

            formAtividade.reset();

            fecharModalAtividade();

            carregarAtividades();

        })

        .catch(() => {

            alert("Erro ao cadastrar atividade");

        });

    });

}

function voltarTurmas() {

    window.location.href = "index2.html";
}

function sair() {

    localStorage.removeItem("professor");
    localStorage.removeItem("turmaId");

    window.location.href = "index.html";
}
