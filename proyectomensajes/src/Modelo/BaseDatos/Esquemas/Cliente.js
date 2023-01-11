const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = Schema({
    Codigo: Number,
    Nombre: String,
    Numero:Number,
    Agencia:Number
})

module.exports = mongoose.model('clientes', clienteSchema);
