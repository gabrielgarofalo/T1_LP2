const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());
const arsenal = {};
contador = 0;

app.get('/arsenal', (req, res) => {
    res.send(arsenal);
});

app.post('/arsenal', async (req, res) => {
    contador ++;
    const tipo = req.body.tipo;
    const nome = req.body.nome;
    const quantidade = req.body.quantidade;
    arsenal[contador] = {
        contador, tipo, nome, quantidade
    }
    console.log(arsenal[contador])
    await axios.post('http://localhost:10000/eventos', {
        tipo: "InseridoArsenal",
        dados: {
            contador,
            tipo,
            nome,
            quantidade
        }
    });
    res.status(200).send(arsenal[contador]);
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.listen(4000, () => {
    console.log('Arsenal. Porta 4000')
});