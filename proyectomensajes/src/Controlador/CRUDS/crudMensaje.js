module.exports = new crud();

//en todas las funcionar cambiar a la clase menos en ingresar.
function crud() {
    const Mensaje = require('./../../Modelo/BaseDatos/Esquemas/Mensaje.js');
    var tabla = "Mensaje";
    
    //Funciones
    this.ingresar = (datos, callback) => {
        mensaje = new Mensaje(datos);
        mensaje.save((error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error ingresando en la tabla: " + tabla + " - ", error);
            }
        });
    }

    this.modificar = (cod_mensaje, datosnuevos, callback) => {
        Mensaje.update({ "_id": cod_mensaje }, datosnuevos, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error modificando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.eliminar = (cod_mensaje, callback) => {
        Mensaje.deleteOne({ "_id": cod_mensaje }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("Error eliminando en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscar1 = (cod_mensaje, callback) => {
        Mensaje.findOne({ "_id": cod_mensaje }, (error, res) => {
            if (!error) {
                callback(res);
            }
            else {
                console.log("error buscando a uno en la tabla: " + tabla + "-", error);
            }
        });
    }

    this.buscarmensaje = (filtro, callback) => {
        Mensaje.find((error, res) => {
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
