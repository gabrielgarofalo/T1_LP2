require('dotenv').config()
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const Arsenal = require ('./models/arsenal');
const cors = require('cors')
const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_HOST,
    MONGODB_DATABASE
  } = process.env
mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
    console.log ("Conexão OK")
   }).catch(() => {
    console.log("Conexão NOK")
   });
   
app.use (bodyParser.json());

app.use (cors())

app.post ('/api/arsenal', (req, res, next) => {
    const item = req.body;
    Arsenal.find({'nome':`${item.nome}`}).then((list_find) =>
    {
        console.log(list_find)
        if (list_find.length === 0){
            const arsenal = new Arsenal({
                tipo: item.tipo.toUpperCase().trim(),
                nome: item.nome.toUpperCase().trim(),
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

app.delete ('/api/arsenal/:nome', (req, res, next) => {
    Arsenal.deleteOne( { nome: `${req.params.nome}` }).then(() => {
        Arsenal.find().then((arsenal) => 
        res.status(201).json({mensagem: 'Arsenal Atualizado', arsenal:arsenal})
        )
    })
});

app.put ('/api/arsenal/:nome', (req, res, next) => {
    Arsenal.updateOne( { nome: `${req.params.nome}` }, { quantidade: `${req.body.quantidade}` }).then(() => {
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