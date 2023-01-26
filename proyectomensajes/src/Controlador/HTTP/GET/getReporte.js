var reporte = (rutas, bd) => {

    rutas.get('/crearreporte', (req, res) => {
        bd.cruds.crudReporte.buscarreporte({}, (reportes) => {
            //despues de la coma son los datos
            res.render('crearreporte', { reportes, datos: "no", env:"no"})
        })                
    })
}

module.exports = reporte;

