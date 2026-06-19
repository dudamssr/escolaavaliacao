# Escola

## Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de auxiliar professores no gerenciamento de turmas e atividades escolares de maneira simples e organizada.

A aplicação permite autenticação de professores, cadastro e visualização de turmas, registro de atividades e acompanhamento das informações relacionadas às aulas.

---

## Tecnologias Utilizadas

### Front-end
- HTML 
- CSS
- JavaScript  

### Back-end
- Node.js  
- Express.js  
- Prisma

### Banco de Dados
- MySQL  

---

## Requisitos de Infraestrutura

- Visual Studio Code
- Node.js  
- MySQL  
- Extensão Live Server (VS Code)  
---

## Estrutura do Banco de Dados

Banco: `mydb`

### Tabelas:
- Professor  
- Turma  
- Atividade  

### Relacionamentos:
- Professor possui várias turmas  
- Turma pertence a um professor  
- Turma possui várias atividades  
- Atividade pertence a uma turma  

---

## *Como Executar o Projeto*

### *. Clone o repositório*

git clone https://github.com/dudamssr/escolaavaliacao.git 

### *. Acesse a pasta do projeto*

cd escola

### *. Instale as dependências*

npm install

### *. Configure o arquivo .env*

DATABASE_URL="mysql://root:@localhost:3306/mydb"

PORT_APP=3000

### *. Execute as migrations*

npx prisma migrate dev

### *. Gere o Prisma Client*

npx prisma generate

### *. Inicie o servidor*

nodemon server.js
```

---

## Execução do Front-end

1. Abrir a pasta no VS Code  
2. Instalar extensão Live Server  
3. Abrir o arquivo `index.html`  
4. Executar com Live Server  
5. Utiliza o e-mail: "robson@gmail.com" e a senha: "111"
---

##  Como Testar o Sistema

1. Iniciar o MySQL  
2. Executar o back-end:
```bash
node server.js
```

3. Abrir o front-end (`index.html`)  
4. Realizar login com professor cadastrado  
5. Cadastrar turmas  
6. Gerenciar atividades  
7. Encerrar sessão  

---

## Evidências do Sistema

Inserir prints das telas:

- Página Inicial  
- Tela de Login  
- Dashboard do Professor  
- Cadastro de Turmas  
- Tela de Atividades  
- Cadastro de Atividades  

---
## Prints
- Estão na pasta /assets
