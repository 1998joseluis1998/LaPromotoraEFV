var actionCliente = (rutas, bd, passport) => {
    rutas.post('/buscarcliente', (req, res) => {
        var cliente = {}
        if (req.body.buscodigo != "") {
            cliente.Codigo = {
                valor: parseInt(req.body.buscodigo),
                tipo: 'igual'
            }
        }
        if (req.body.busnombre != "") {
            cliente.Nombre = {
                valor: req.body.busnombre,
                tipo: 'contieneString'
            }
        }
        if (req.body.busnumero != "") {
            cliente.Numero = {
                valor: parseInt(req.body.busnumero),
                tipo: 'igual'
            }
        }
        console.log(cliente)
        bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
            console.log("Busqueda de cliente correctamente", (r));
            bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
                let codigo = r.map(a => a.Codigo).join(",")
                let nombre = r.map(a => a.Nombre).join(",")
                let numero = r.map(a => a.Numero).join(",")
                let agencia = r.map(a => a.Agencia).join(",")
                res.render("enviarmensaje", {mensajes,datos: r,codigo, nombre,numero,agencia})
            })
        });
    });

}//cerramos todo

module.exports = actionCliente;