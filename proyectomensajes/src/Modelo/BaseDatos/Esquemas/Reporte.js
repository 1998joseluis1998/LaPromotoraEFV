const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reporteSchema = Schema({
    Codigo: Number,
    Nombre: String,
    Numero: Number,
    mensaje:String,//recordatorio de asfi
    fecha_envio:String,//fecha 2023
    Agencia: Number
})

module.exports = mongoose.model('reportes', reporteSchema);
