Este projeto consiste no desenvolvimento de uma API REST utilizando Node.js e Express para o gerenciamento de produtos.
A API permite listar produtos, buscar por ID, aplicar filtros, ordenação, busca por nome e cadastrar novos produtos.

Os testes da API foram realizados utilizando o Postman.

🚀 Como executar o projeto
Clonar o repositório:
git clone LINK_DO_REPOSITORIO
Entrar na pasta do projeto:
cd api-produtos
Instalar as dependências:
npm install
Executar a API:
node index.js

O servidor será iniciado em:

http://localhost:3000
📌 Endpoints da API
🔹 GET - Listar todos os produtos
GET http://localhost:3000/api/produtos

Retorna a lista completa de produtos cadastrados.

🔹 GET - Buscar produto por ID
GET http://localhost:3000/api/produtos/1

Retorna um produto específico pelo ID.

Se o produto não existir, retorna erro 404.

🔹 GET - Filtrar por categoria
GET http://localhost:3000/api/produtos?categoria=Audio

Retorna os produtos da categoria informada.

🔹 GET - Buscar produto por nome
GET http://localhost:3000/api/produtos?busca=mouse

Retorna produtos que contenham o nome informado.

🔹 GET - Filtrar por faixa de preço
GET http://localhost:3000/api/produtos?preco_min=100&preco_max=300

Retorna produtos dentro da faixa de preço.

🔹 GET - Ordenar por preço
GET http://localhost:3000/api/produtos?ordenar=preco

Retorna produtos ordenados pelo preço em ordem crescente.

🔹 POST - Cadastrar novo produto
POST http://localhost:3000/api/produtos

Body JSON:

{
  "id": 6,
  "nome": "Webcam",
  "preco": 250,
  "categoria": "Video",
  "estoque": 4
}

Retorna mensagem de sucesso ao cadastrar o produto.

Validações implementadas
Todos os campos são obrigatórios
O nome não pode ser vazio
O preço deve ser maior que zero
O estoque não pode ser negativo
O ID não pode ser repetido

Testes realizados no Postman

Foram realizados testes para:

Listar produtos
Buscar produto por ID válido
Buscar produto por ID inexistente
Filtrar por categoria
Buscar por nome
Filtrar por preço
Ordenar por preço
Cadastrar 5 novos produtos
Testar validações de erro

A Collection do Postman está disponível no projeto em formato .json.

👨‍💻 Tecnologias utilizadas
Node.js
Express
JavaScript
Postman
📅 Trabalho acadêmico

Projeto desenvolvido como atividade prática para aprendizado de criação e testes de API REST.
