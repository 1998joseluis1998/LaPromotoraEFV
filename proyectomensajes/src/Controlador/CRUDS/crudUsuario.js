module.exports = new crud();

function crud() {
    const Usuario = require('./../../Modelo/BaseDatos/Esquemas/Usuario.js');
    var tabla = "Usuario";

    //Funciones
    this.ingresar = (datos, callback) => {
        var usuario = new Usuario(datos);
        usuario.save((error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error ingresando en la tabla: " + tabla + " - ", error);
            }
        });
    }

    this.modificar = (cod_usuario, datosnuevos, callback) => {
        Usuario.update({ "_id": cod_usuario }, datosnuevos, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error modificando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.eliminar = (cod_usuario, callback) => {
        Usuario.deleteOne({ "_id": cod_usuario }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error eliminando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscar1 = (cod_usuario, callback) => {
        Usuario.findOne({ "_id": cod_usuario }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscarusuario = (filtro, callback) => {
        Usuario.find((error, res) => {
            if (!error) {
                const buscar = require("./Buscador.js");
                res = buscar(res, filtro);
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }


    //cierra Funciones


}//cierra crud
