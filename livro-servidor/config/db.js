const mongoose = require('mongoose');

async function conectarBanco() {
  try {
    await mongoose.connect('mongodb://localhost:27017/livraria');

    console.log('MongoDB conectado com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar MongoDB:', erro);
  }
}

module.exports = conectarBanco;