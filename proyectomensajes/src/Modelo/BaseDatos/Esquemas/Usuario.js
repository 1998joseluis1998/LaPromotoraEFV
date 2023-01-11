const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    Usuario:String,//correp@loca.com
    Contra: String,//sdwasd
    Habilitado: Boolean//
})

module.exports = mongoose.model('usuarios',usuarioSchema);
