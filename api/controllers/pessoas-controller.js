const pessoaModel = require('../models/pessoas-model');

exports.registrarPessoa = async (req, res, next) => {
    try {
        let pessoa = {
            nome: req.body.nome,
            hobby: req.body.hobby
        };
        const pessoaRegistrada = await pessoaModel.create(pessoa);
        return res.status(201).send(pessoaRegistrada);
    } catch (error) {
        return res.status(500).send({ status: 500, mensagem: "Não foi possível cadastrar", error: error });
    }
};

exports.getPessoasCadastradas = async (req, res, next) => {
    try {
        const resultadoGet = await pessoaModel.findAll();

        if (resultadoGet.length === 0) {
            res.status(204).send({ status: 204, mensagem: 'Sem dados para mostrar' });
        } else {
            const response = {
                quantidade: resultadoGet.length,
                pessoas: resultadoGet.map(pessoas => {
                    return {
                        id_pessoa: pessoas.id,
                        nome: pessoas.nome,
                        hobby: pessoas.hobby
                    };
                })
            };
            return res.status(200).send({status:200, response});
        }
    } catch (error) {
        return res.status(500).send({ status: 500, mensagem: "Falha ao procurar", error: error });
    }

};

exports.getPessoa = async (req, res, next) => {
    try {
        const pessoa = await pessoaModel.findOne({ where: { id: req.params.id_pessoa } });
        return res.status(200).send({status: 200, pessoa});
    } catch (error) {
        return res.status(500).send({ status: 500, mensagem: "Falha ao procurar", error: error });
    }
};

exports.updatePessoa = async (req, res, next) => {
    try {
        let pessoa = {
            id: req.body.id_pessoa,
            nome: req.body.nome,
            hobby: req.body.hobby
        };

        const pessoaAlterada = await pessoaModel.update(pessoa, {where: {id: req.body.id_pessoa}});
        return res.status(201).send({ status: 201, pessoa: pessoaAlterada, mensagem: 'Dados da pessoa alterado' });

    } catch (error) {
        return res.status(500).send({ status: 500, mensagem: "Falha ao tentar alterar", error: error });
    }
};

exports.deletarPessoa = async (req, res, next) => {
    try {
        pessoaModel.destroy({where: {id: req.body.id_pessoa}})

        res.status(200).send({status:200, mensagem: 'Solucionador excluído' });
    } catch (error) {
        return res.status(500).send({ status: 500, mensagem: "Falha ao tentar remover", error: error });
    }
};
