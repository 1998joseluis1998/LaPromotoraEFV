var reporte = (rutas, bd) => {

    rutas.get('/crearreporte', (req, res) => {
        res.sendfile('crearreporte')
    })
}

module.exports = reporte;

