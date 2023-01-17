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

    let porcen;
    rutas.post('/enviarmasivo', (req, res) => {
        let conta = req.body.val
        
        for (var i = 0; i < conta; i++) {//for de datos
            let cliente = {}
            
            if (req.body.masagencia[i] != "") {
                cliente.Agencia = {
                    valor: parseInt(req.body.masagencia[i]),
                    tipo: 'igual'
                }
                porcen=req.body.porcentaje[i]
            }
            bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
                //console.log("el mensaje a enviar es", req.body.mensaje)
                console.log(porcen)
                console.log("total clientes de la agencia " + (req.body.masagencia[i]) + ":", r.length)
                let resul = Math.ceil(r.length * (porcen/ 100))
                console.log("porcentaje a conseguir es: ", porcen)
                let datostotal = []
                for (var d = 0; d < resul; d++) {
                    datostotal.push(r[d])
                }
                console.log("cantidad clientes", datostotal.length)
            });
        }
        
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
            res.render("enviarmasivo", { mensajes })
        })


    });//final de todos las agencias


    rutas.post('/enviarmensaje', (req, res) => {
        //console.log(req.body)

        console.log(req.body)
        if (req.body.mensajeescrito != "") {
            //req.user.Usuario            
            console.log(req.user.Usuario)
            let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + req.body.numero + "&message=" + req.body.mensajeescrito + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
            console.log(ruta)
            /*fetch(ruta)
             .then(response => {
                 return response.json()
             }).then(json => {
                 console.log(json)
             })
            */

            let fecha = new Date();
            let dia = fecha.getDate();
            let mes = fecha.getMonth() + 1;
            let anio = fecha.getFullYear();
            let fecha_envio = `${dia}/${mes}/${anio}`
            console.log(fecha_envio)

            let hora_env = new Date();
            let hora = hora_env.getHours();
            let min = hora_env.getMinutes();
            let second = hora_env.getSeconds();
            let hora_envio = `${hora}/${min}/${second}`
            console.log(hora_envio)
            /*const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
            var hash = confirmacion(req.user.Usuario);
            console.log("se envio el correo", hash)  */
            //bd.cruds.crudReporte.ingresar()                                
            var reporte = {

            }
        }
        else {
            bd.cruds.crudMensaje.buscar1(req.body.mensaje, (r) => {
                console.log(r)
                let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + req.body.numero + "&message=" + r.Mensaje + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                console.log(ruta)
                /*
                 fetch(ruta)
                .then(response => {
                   return response.json()
                 }).then(json => {
                     console.log(json)
                })
                */
                let fecha = new Date();
                let dia = fecha.getDate();
                let mes = fecha.getMonth() + 1;
                let anio = fecha.getFullYear();
                fecha_envio = `${dia}/${mes}/${anio}`
                let hora_env = new Date();
                let hora = hora_env.getHours();
                let min = hora_env.getMinutes();
                let second = hora_env.getSeconds();
                let hora_envio = `${hora}:${min}:${second}`
                console.log(req.body)
                console.log(fecha_envio)
                console.log(hora_envio)
                console.log(r.Mensaje)
                console.log(req.user.Usuario)
                /*
                const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                var hash = confirmacion(req.user.Usuario);                    
                console.log("se envio el correo",hash)*/
                var reporte = {}
                if (req.body.puerto == "gsm-4") {
                    reporte.CHIP = 73348513;
                }
                reporte.COD_CLI = req.body.codigo,
                    reporte.APELLIDOS_NOMBRES = req.body.nombre,
                    reporte.NRO_CEL = req.body.numero,
                    reporte.PLAZA = 30,
                    reporte.AGENCIA = req.body.agencia,//recordatorio de asfi
                    reporte.MENSAJE = r.Mensaje,
                    reporte.FECHA_ENVIO = fecha_envio,
                    reporte.HORA_ENVIO = hora_envio,
                    reporte.ENVIADOR = req.user.Usuario,

                    bd.cruds.crudReporte.ingresar(reporte, (r) => {
                        console.log("Reporte ingresado correctamente", JSON.stringify(r));
                        res.redirect('enviarmensaje')
                    })

            })
        }
    });





    //funciones

}//cerramos todo

module.exports = actionMensaje;