const mongoose = require('mongoose');
const Livro = require('./models/livro');

mongoose.connect('mongodb://localhost:27017/livraria');

async function testar() {
    const livro = new Livro({
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        ano: 1899,
        preco: 39.90
    });

    await livro.save();

    console.log('Livro salvo com sucesso!');
    process.exit();
}

testar();
