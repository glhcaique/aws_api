const express = require('express');
const router = express.Router();

const pessoaController = require('../controllers/pessoas-controller');

router.route('/api/v1/pessoas')
    .get(pessoaController.getPessoasCadastradas)
    .post(pessoaController.registrarPessoa)
    .patch(pessoaController.updatePessoa)
    .delete(pessoaController.deletarPessoa)
    ;

router.route('/api/v1/pessoa/:id_pessoa')
    .get(pessoaController.getPessoa);

module.exports = router;