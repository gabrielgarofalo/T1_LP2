const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

app.use (bodyParser.json());

const arsenal = []
id = -1;

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
   });

app.post ('/api/arsenal', (req, res, next) => {
    id ++;
    const item = req.body;
    const tipo = item.tipo;
    const nome = item.nome;
    const quantidade = item.quantidade;
    arsenal.push({
        id, tipo, nome, quantidade
    })
    res.status(201).json({mensagem: 'Item inserido no arsenal'})
});
   
   
app.use('/api/arsenal', (req, res, next) => {
    res.status(200).json({
    mensagem: "Tudo OK",
    arsenal: arsenal
    });
});
   
module.exports = app;