const pessoaModel = require('../models/pessoas-model');

const Sequelize = require('sequelize'); //Definir tipo da variável
const sequelize = require('../helpers/sequelize'); //Instancia do sequelize criado

//Criando os atributos em node junto com os campos definidos no banco
const Pessoa = sequelize.define('Pessoas', {

    nome: {
        type: Sequelize.STRING
    },
    hobby: {
        type: Sequelize.STRING
    }
});

module.exports = Pessoa;