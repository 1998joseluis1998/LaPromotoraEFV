const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whatsappSchema = Schema({
    USUARIO:String,//correp@loca.com
    NOMBRE_DOC: String,//sdwasd
    TIPO_DOC:String,//,
    FECHA:String
})

module.exports = mongoose.model('whatsapp',whatsappSchema);
