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

