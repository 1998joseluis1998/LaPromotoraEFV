module.exports = new crud();

function crud() {
    const Reporte = require('./../../Modelo/BaseDatos/Esquemas/Reporte.js');
    var tabla = "Reporte";

    //Funciones
    this.ingresar = (datos, callback) => {
        var reporte = new Reporte(datos);
        reporte.save((error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error ingresando en la tabla: " + tabla + " - ", error);
            }
        });
    }

    this.modificar = (cod_reporte, datosnuevos, callback) => {
        Reporte.update({ "_id": cod_reporte }, datosnuevos, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error modificando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.eliminar = (cod_reporte, callback) => {
        Reporte.deleteone({ "_id": cod_reporte }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error eliminando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscar1 = (cod_reporte, callback) => {
        Reporte.findOne({ "_id": cod_reporte }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscarreporte = (filtro, callback) => {
        Reporte.find((error, res) => {
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
