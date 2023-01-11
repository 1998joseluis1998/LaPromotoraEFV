module.exports = new crud();

function crud() {
    const Cliente = require('./../../Modelo/BaseDatos/Esquemas/Cliente.js');
    var tabla = "Cliente";

    //Funciones
    this.ingresar = (datos, callback) => {
        var cliente = new Cliente(datos);
        cliente.save((error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error ingresando en la tabla: " + tabla + " - ", error);
            }
        });
    }

    this.modificar = (cod_cliente, datosnuevos, callback) => {
        Cliente.update({ "_id": cod_cliente }, datosnuevos, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error modificando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.eliminar = (cod_cliente, callback) => {
        Cliente.deleteOne({ "_id": cod_cliente }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error eliminando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscar1 = (cod_cliente, callback) => {
        Cliente.findOne({ "_id": cod_cliente }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscarcliente = (filtro, callback) => {
        Cliente.find((error, res) => {
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
