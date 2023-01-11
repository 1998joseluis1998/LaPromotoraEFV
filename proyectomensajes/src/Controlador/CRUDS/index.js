module.exports = new cruds();

function cruds() {
    this.crudCliente;
    this.crudReporte;
    this.crudUsuario;
    this.crudMensaje;

    this.iniciar = () => {
        this.crudCliente = require('./crudCliente.js');
        this.crudReporte = require('./crudReporte.js');
        this.crudUsuario = require('./crudUsuario.js');        
        this.crudMensaje = require('./crudMensaje.js');
    }
}
