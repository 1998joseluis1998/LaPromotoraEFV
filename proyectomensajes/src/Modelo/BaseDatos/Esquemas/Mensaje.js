const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mensajeSchema = Schema({
    Mensaje: String,//correp@loca.com
    Numeros: [String],//sdwasd
    
})

module.exports = mongoose.model('mensajes', mensajeSchema);
