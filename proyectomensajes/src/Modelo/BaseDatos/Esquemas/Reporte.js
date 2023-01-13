const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reporteSchema = Schema({
    COD_CLI: Number,
    APELLIDOS_NOMBRES: String,
    NRO_CEL: Number,
    PLAZA: Number,
    AGENCIA:String,//recordatorio de asfi
    MENSAJE:String,
    FECHA_ENVIO:String,
    HORA_ENVIO:String,
    ENVIADOR:String,
    CHIP:Number
})

module.exports = mongoose.model('reportes', reporteSchema);
