const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({

    codEditora: {
        type: Number,
        required: true
    },

    titulo: {
        type: String,
        required: true
    },

    resumo: {
        type: String,
        required: true
    },

    autores: {
        type: [String],
        required: true
    }

});

module.exports = mongoose.model('Livro', LivroSchema);
