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
            console.log("Busqueda de reporte correctamente", (r));
            res.render("crearreporte",{datos:r})
        });
    });


    /*
    rutas.post('/masivoreporte', (req, res) => {
        var reporte = {
            //mandamos los campos para la base de datos(name="")
            Mensaje: req.body.mensaje,
            Numeros: []
        };
        
        bd.cruds.crudCliente.buscarcliente({//filtrado por agencia}, (clientes) => {                        
            //COPIAR INTERVALOS 

        })

        redirect("/esperando")        
        
        //buscar en clientes con el buscador por agencias
        //[todos los datos]//numero nomas
        var cliente=["73348513","79351634"]
        //ESTOCOPIAR
        var i=0
        var intervalo=setInterval(() => {
            //clientes[i].Numero
            //hace fetch         url del fetch   
            /*bd.cruds - crudReporte.ingresar(Reporte, (r) => {
                console.log("Mensaje ingresado correctamente", JSON.stringify(r));
                console.log("enviando mensaje a ",cliente[i])
            }) 
            i++
            if(i>=cliente.length){
                clearInterval(intervalo)
                console.log("intervalo terminado")
                //enviar correo termino                
            }
        }, 20000);
        
        
        
        //leer clientes

        //filtrar clientes
        
        //iniciar intervalo(variable)
        //fetch
        //console.log(enviado a+)
        //guardar en la base de datos reporte
        //

        //redirect automaticamente

        //termina el ultimo intervalo mandar al correo mensaje


        


        res.redirect('enviarmensaje')
    });
    */




    //funciones

}//cerramos todo

module.exports = actionReporte;