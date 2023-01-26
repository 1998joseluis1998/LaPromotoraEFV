const { json } = require('body-parser');

var actionReporte = (rutas, bd) => {    
    rutas.post('/buscarreporte', (req, res) => {
        var reporte = {}
        if (req.body.bususuario != "") {
            reporte.ENVIADOR = {
                valor: (req.body.bususuario),
                tipo: 'contieneString'
                
            }
        }
        if (req.body.busfecha != "") {
            reporte.FECHA_ENVIO = {
                valor: req.body.busfecha,
                tipo: 'contieneString'
            }
        }               
      
        bd.cruds.crudReporte.buscarreporte(reporte, (r) => {                               
            res.render("crearreporte", { datos: r ,env:req.body.bususuario})
         //   console.log("Busqueda de reporte correctamente", (r));                        
        });
    });
    
    rutas.post('/descargarexcel', (req, res) => {
        console.log(req.body.env)
        var reporte = {}
        reporte.ENVIADOR = {
            valor: (req.body.env),
            tipo: 'contieneString'
            }
        bd.cruds.crudReporte.buscarreporte(reporte, (r) => {            
            console.log("Busqueda de reporte correctamente", (r));      
            const excel = require('./../Reporte.js');
            res.download(excel(JSON.parse(JSON.stringify(r)), 'mensajes', ['key', '__v','_id']));
        });
    });          
    //funciones

}//cerramos todo

module.exports = actionReporte;