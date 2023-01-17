var actionReporte = (rutas, bd) => {
    const env={};

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
       /* bd.cruds.crudReporte.buscarreporte(reporte, (r) => {
            env.ENVIADOR={
                valor:req.body.usuario,
                tipo:'contieneString'                
            }
            //console.log("Busqueda de reporte correctamente", (r));            
            res.render("crearreporte",{datos:r})
        });*/
        bd.cruds.crudReporte.buscarreporte(reporte, (r) => {
            const excel = require('./../Reporte.js');
            res.download(excel(r, 'mensajes', ['key', 'geojson'])); 
            console.log("Busqueda de reporte correctamente", (r));                        
        });
    });
    
    rutas.post('/descargarexcel', (req, res) => {                           
        bd.cruds.crudReporte.buscarreporte(env, (r) => {            
            //console.log("Busqueda de reporte correctamente", (r));            
            const excel = require('./../Reporte.js');
            res.download(excel(r, 'mensajes', ['key', 'geojson']));             
        });
    });   
    
   
    //funciones

}//cerramos todo

module.exports = actionReporte;