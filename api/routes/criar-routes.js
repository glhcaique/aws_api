const express = require('express');
const router = express.Router();

const pessoaModel =require('../models/pessoas-model');

router.route('/criar_tabela')
    .get(async (req,res,next)=>{
        try {
            const criado = await pessoaModel.sync({force :true});
        
            res.status(201).send({status: 201, mensagem: 'Tabela criada', criado});
        } catch (error) {
            res.status(500).send({erro:error});
        }
    });

router.route('/teste').get((req,res,next) =>{res.status(200).send({status:201,"mensage":"Sucesso"})});

module.exports = router;