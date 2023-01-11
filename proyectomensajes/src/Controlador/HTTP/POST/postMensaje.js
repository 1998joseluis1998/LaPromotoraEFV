var actionMensaje = (rutas, bd) => {
    rutas.post('/crearmensaje', (req, res) => {
        var Mensaje = {
            //mandamos los campos para la base de datos(name="")
            Mensaje: req.body.mensaje,
            Numeros: []
        };

        bd.cruds.crudMensaje.ingresar(Mensaje, (r) => {
            console.log("Mensaje ingresado correctamente", JSON.stringify(r));
            res.redirect('vermensaje')
        })

    });

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
       /* if (req.body.busagencia != "") {
            cliente.Agencia = {
                valor: parseInt(req.body.busagencia),
                tipo: 'igual'
            }
        }*/
        console.log(cliente)
        bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
            console.log("Busqueda de cliente correctamente", (r));
            bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
                let numeros = r.map(a => a.Numero).join(",")
                res.render("enviarmensaje", { mensajes, datos: r, numeros })
            })
        });
    });

    rutas.post('/buscaragencia', (req, res) => {                
        //codigo para sacar de uno
        var conta=req.body.val
        console.log(req.body)              
                
        //cod 1
        var cliente = {}        
         if (req.body.masagencia != "") {
             cliente.Agencia = {
                 valor: parseInt(req.body.masagencia),
                 tipo: 'igual'
             }
         }
        var porcen=req.body.porcentaje        
        bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
            console.log("Busqueda de cliente correctamente");                
            var resul=Math.ceil(r.length*(porcen/100))
            console.log(resul)
            var datostotal=[]                       
            for(var i=0;i<resul;i++){
                
                datostotal.push(r[i])                
            }
            console.log(datostotal)
            bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
                let numeros = r.map(a => a.Numero).join(",")
                res.render("enviarmasivo", { mensajes,datostotal, numeros})
            })
        });
    });


    rutas.post('/enviarmensaje', (req, res) => {
        //console.log(req.body)
        if (req.body.mensajeescrito != "") {
            //req.user.Usuario            
            console.log(req.user.Usuario)
            req.body.numeros.split(",").map(num => {
                let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + num + "&message=" + req.body.mensajeescrito + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                console.log(ruta)
                fetch(ruta)
                 .then(response => {
                     return response.json()
                 }).then(json => {
                     console.log(json)
                 })                  
                const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                var hash = confirmacion(req.user.Usuario);
                console.log("se envio el correo", hash)  
                bd.cruds.crudReporte.ingresar(




                )
            })

        }
        else {
            console.log(req.user.Usuario)
            req.body.numeros.split(",").map(num => {
                bd.cruds.crudMensaje.buscar1(req.body.mensaje, (r) => {
                    console.log(r)
                    let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + num + "&message=" + r.Mensaje + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                    console.log(ruta)
                     fetch(ruta)
                    .then(response => {
                       return response.json()
                     }).then(json => {
                         console.log(json)
                    })
                    const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                    var hash = confirmacion(req.user.Usuario);                    
                    console.log("se envio el correo",hash)                           
                })

            })
        }        
    });





    //funciones

}//cerramos todo

module.exports = actionMensaje;