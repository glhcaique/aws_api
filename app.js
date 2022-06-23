const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Pegando as rotas
const rotaPessoa = require('./api/routes/pessoas-routes');
const rotaCriar = require('./api/routes/criar-routes');

//Salvando todas as rotas em uma variável constante
const routes = [
    rotaPessoa,
    rotaCriar
];

app.use(bodyParser.urlencoded({extended: false})); // Apenas dados simples
app.use(bodyParser.json()); //json no body

//Tratamento do CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');//Substituir o * pela url do site
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, x-Requested-With, Content-Type, Accept, Authorization');

        if(req.method === 'OPTIONS'){
            res.header(
                'Access-Control-Allow-Methods', 
                'PUT, POST, PATCH, DELETE, GET'
            );
            return res.status(200).send({});
        }

        next();
});

app.use('/', routes);

module.exports = app;