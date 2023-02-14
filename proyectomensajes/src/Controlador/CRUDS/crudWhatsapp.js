module.exports = new crud();

function crud() {
    const Whatsapp = require('./../../Modelo/BaseDatos/Esquemas/Whatsapp.js');
    var tabla = "Whatsapp";

    //Funciones
    this.ingresar = (datos, callback) => {
        var whatsapp = new Whatsapp(datos);
        whatsapp.save((error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error ingresando en la tabla: " + tabla + " - ", error);
            }
        });
    }

    this.modificar = (cod_reporte, datosnuevos, callback) => {
        Whatsapp.update({ "_id": cod_reporte }, datosnuevos, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error modificando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.eliminar = (cod_reporte, callback) => {
        Whatsapp.deleteone({ "_id": cod_reporte }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error eliminando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscar1 = (cod_reporte, callback) => {
        Whatsapp.findOne({ "_id": cod_reporte }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscarreporte = (filtro, callback) => {
        Whatsapp.find((error, res) => {
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
