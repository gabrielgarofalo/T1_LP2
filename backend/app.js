const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const Arsenal = require ('./models/arsenal');
mongoose.connect("mongodb+srv://mongo_arsenal:mongo_arsenal@cluster-t1-lp2.nsr9ne2.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log ("Conexão OK")
   }).catch(() => {
    console.log("Conexão NOK")
   });
   
app.use (bodyParser.json());

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
   });

app.post ('/api/arsenal', (req, res, next) => {
    const item = req.body;
    Arsenal.find({'nome':`${item.nome}`}).then((list_find) =>
    {
        console.log(list_find)
        if (list_find.length === 0){
            const arsenal = new Arsenal({
                tipo: item.tipo.toUpperCase(),
                nome: item.nome.toUpperCase(),
                quantidade: item.quantidade
                })
            console.log (arsenal);
            arsenal.save().then(() => {
            Arsenal.find().then((arsenal_atualizado) => {
                res.status(201).json({mensagem: 'Item inserido no arsenal', arsenal:arsenal_atualizado})
            })
        })} else {
                Arsenal.find().then((arsenal_atual) => 
                res.status(201).json({mensagem: 'Item já inserido no arsenal', arsenal:arsenal_atual})
                )
            }
        })
});

app.post ('/api/arsenal/remover', (req, res, next) => {
    var item = req.body;
    Arsenal.deleteOne( { nome: `${item.nome}` }).then(() => {
        Arsenal.find().then((arsenal) => 
        res.status(201).json({mensagem: 'Arsenal Atualizado', arsenal:arsenal})
        )
    })
});
   
   
app.get('/api/arsenal', (req, res, next) => {
    Arsenal.find().then(item => {
        res.status(200).json({
        mensagem: "Tudo OK",
        arsenal: item
        });
        })
});
   
module.exports = app;