var retorno = (passport) => {
    const express = require('express');
    var rutas = express.Router();

    var bd = require('./../../Modelo/BaseDatos/index.js');
    bd.iniciar();

    //GET
    require('./GET/getMensaje.js')(rutas, bd, passport);
    require('./GET/getReporte.js')(rutas, bd, passport);
    require('./GET/getUsuario.js')(rutas, bd, passport);
    require('./GET/getSaldo.js')(rutas,bd,passport);
    //POST}

    require('./POST/postUsuario.js')(rutas, bd, passport);        
    require('./POST/postMensaje.js')(rutas, bd, passport);
    require('./POST/postCliente.js')(rutas,bd,passport);
    require('./POST/postReporte.js')(rutas,bd,passport);
    require('./POST/postSaldo.js')(rutas,bd,passport);
    return rutas;

}

module.exports = retorno;
