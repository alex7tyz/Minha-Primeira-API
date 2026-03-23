<<<<<<< HEAD
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let produtos = [
    { id: 1, nome: "Mouse Gamer", preco: 120, categoria: "Perifericos", estoque: 10 },
    { id: 2, nome: "Teclado Mecânico", preco: 350, categoria: "Perifericos", estoque: 5 },
    { id: 3, nome: "Monitor 24", preco: 900, categoria: "Monitores", estoque: 3 },
    { id: 4, nome: "Headset", preco: 200, categoria: "Audio", estoque: 8 },
    { id: 5, nome: "Caixa de Som", preco: 150, categoria: "Audio", estoque: 6 }
];

// GET - listar produtos com filtros
app.get("/api/produtos", (req, res) => {
    res.json(produtos);;

    const categoria = req.query.categoria;
    const ordenar = req.query.ordenar;
    const precoMin = req.query.preco_min;
    const precoMax = req.query.preco_max;
    const busca = req.query.busca;

    if (categoria) {
        resultado = resultado.filter(p =>
            p.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }

    if (busca) {
        resultado = resultado.filter(p =>
            p.nome.toLowerCase().includes(busca.toLowerCase())
        );
    }

    if (precoMin) {
        resultado = resultado.filter(p => p.preco >= Number(precoMin));
    }

    if (precoMax) {
        resultado = resultado.filter(p => p.preco <= Number(precoMax));
    }

    if (ordenar === "preco") {
        resultado.sort((a, b) => a.preco - b.preco);
    }

    res.json(resultado);
});
// GET - buscar produto por ID
app.get("/api/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

// POST - cadastrar novo produto
app.post("/api/produtos", (req, res) => {
    const { id, nome, preco, categoria, estoque } = req.body;

    if (!id || !nome || preco == null || !categoria || estoque == null) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
    }

    const produtoExistente = produtos.find(p => p.id === id);
    if (produtoExistente) {
        return res.status(400).json({ mensagem: "ID já cadastrado" });
    }

    if (nome.trim() === "") {
        return res.status(400).json({ mensagem: "Nome não pode ser vazio" });
    }

    if (preco <= 0) {
        return res.status(400).json({ mensagem: "Preço deve ser maior que zero" });
    }

    if (estoque < 0) {
        return res.status(400).json({ mensagem: "Estoque não pode ser negativo" });
    }

    const novoProduto = {
        id,
        nome,
        preco,
        categoria,
        estoque
    };

    produtos.push(novoProduto);

    res.status(201).json({
        mensagem: "Produto cadastrado com sucesso",
        produto: novoProduto
    });
});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
=======
// 1.Importar Express 
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

app.get('/info', (req, res) => {
    res.json({
        nome: 'Alex',
        versao: '1.0.0',
        autor: 'Seu Nome'
    });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

>>>>>>> ce36cdf71d09bb8f43cfd96e61b1afcf3df47232
