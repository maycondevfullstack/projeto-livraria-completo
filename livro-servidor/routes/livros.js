const express = require('express');
const router = express.Router();

const {
    obterLivros,
    incluir,
    excluir
} = require('../models/livro-dao');


router.get('/', async (req, res) => {

    const livros = await obterLivros();

    res.json(livros);

});


router.post('/', async (req, res) => {

    try {

        await incluir(req.body);

        res.json({
            status: true,
            mensagem: 'Livro incluído com sucesso'
        });

    } catch {

        res.json({
            status: false,
            mensagem: 'Erro ao incluir livro'
        });

    }

});


router.delete('/:codigo', async (req, res) => {

    try {

        await excluir(req.params.codigo);

        res.json({
            status: true,
            mensagem: 'Livro excluído com sucesso'
        });

    } catch {

        res.json({
            status: false,
            mensagem: 'Erro ao excluir livro'
        });

    }

});

module.exports = router;