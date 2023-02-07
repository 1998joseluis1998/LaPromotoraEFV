var interval;

var actionMensaje = (rutas, bd) => {
    rutas.post("/parar", (req,res)=>
    {

        clearInterval(interval)
        //correo
        let mensaje = 'Se cancelo el envio de los mensajes.'
        const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
        var hash = confirmacion(req.user.Usuario,mensaje);
        console.log("se envio el correo", hash)
        res.redirect("/saldo")

    })
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


    rutas.post('/enviarmasivo', (req, res) => {
        let datosgrupo = []
        let datosuno = []
        let conta = 0
        let saldo = req.body.saldo
        console.log(req.body.saldo)
        if (req.body.val > 1) {//para mas de uno de los inputs                      
            for (var i = 0; i < req.body.val; i++) {
                //for de datos
                let cliente = {}
                let porcen = "a"
                let agen = "a"
                if (req.body.masagencia[i] != "") {
                    cliente.Agencia = {
                        valor: parseInt(req.body.masagencia[i]),
                        tipo: 'igual'
                    }
                }
                porcen = req.body.porcentaje[i]
                agen = req.body.masagencia[i]
                bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
                    conta++
                    //console.log("el mensaje a enviar es", req.body.mensaje)                
                    console.log("total clientes de la agencia " + (agen) + ":", r.length)
                    let resul = Math.ceil(r.length * (porcen / 100))
                    console.log("porcentaje a conseguir es: ", porcen)
                    for (var d = 0; d < resul; d++) {
                        datosgrupo.push(r[d])
                    }
                    console.log("cantidad clientes grupo", resul)
                    if (conta == valor) {
                        let num = 0
                        interval = setInterval(() => {
                            bd.cruds.crudMensaje.buscar1(req.body.mensaje, (r) => {
                                console.log("entrada", num)
                                if (datosgrupo.length > num) {
                                    const fecha = require('./../Fecha.js');
                                    const fecha_actual = fecha();
                                    const hora = require('./../Hora.js');
                                    const hora_actual = hora();
                                    var reporte = {}
                                    if (req.body.puerto == "gsm-4") {
                                        reporte.CHIP = 77487798;
                                    }
                                    reporte.COD_CLI = datosgrupo[num].Codigo,
                                        reporte.APELLIDOS_NOMBRES = datosgrupo[num].Nombre,
                                        reporte.NRO_CEL = datosgrupo[num].Numero,
                                        reporte.PLAZA = 30,
                                        reporte.AGENCIA = datosgrupo[num].Agencia,//recordatorio de asfi
                                        reporte.MENSAJE = r.Mensaje,
                                        reporte.FECHA_ENVIO = fecha_actual,
                                        reporte.HORA_ENVIO = hora_actual,
                                        reporte.ENVIADOR = req.user.Usuario
                                    let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + datosgrupo[num].Numero + "&message=" + r.Mensaje + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                                    console.log(ruta)
                                    console.log("salida", num)
                                    /*
                                    //codigo del fetch
                                    fetch(ruta)
                                        .then(response => {
                                            return response.json()
                                        }).then(json => {
                                            console.log(json)
                                    })
                                    
                                    bd.cruds.crudReporte.ingresar(reporte, (r) => {
                                        console.log("Reporte ingresado correctamente", JSON.stringify(r));
                                    })*/
                                } else {
                                    console.log("acabamos de mandar todo")
                                    /*codigo para mandar correo
                                    const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                                    var hash = confirmacion(req.user.Usuario,reporte.APELLIDOS_NOMBRES,reporte.NRO_CEL);
                                    console.log("se envio el correo", hash)*/
                                    clearInterval(interval);
                                }
                                num++;
                            });
                        }, 4000);
                        res.render('esperarenvio', { datos: datosgrupo })
                        //aqui no
                    } else {
                        console.log("no estan llegando")
                    }

                });
            }

        }

//este funciona

        if (req.body.val == 1) {//para uno sola caja de texto                   
            let cliente = {}
            if (req.body.masagencia != "") {
                cliente.Agencia = {
                    valor: parseInt(req.body.masagencia),
                    tipo: 'igual'
                }
            }
            bd.cruds.crudCliente.buscarcliente(cliente, (r) => {
                //console.log("el mensaje a enviar es", req.body.mensaje)                
                console.log("total clientes de la agencia " + (req.body.masagencia) + ":", r.length)
                let resul = Math.ceil(r.length * (req.body.porcentaje / 100))
                console.log("porcentaje a conseguir es: ", req.body.porcentaje)
                for (var d = 0; d < resul; d++) {
                    datosuno.push(r[d])
                }
                console.log("cantidad clientes uno", datosuno.length)
                let costoenvio=datosuno.length*0.2
                console.log("saldo disponible",saldo)
                console.log("costo de todo el envio",costoenvio)                
                if(saldo>costoenvio){
                    console.log("tenemos saldo suficiente para enviar")
                    let num = 0
                    interval = setInterval(() => {
                        bd.cruds.crudMensaje.buscar1(req.body.mensaje, (r) => {
                            console.log("entrada", num)
                            if (datosuno.length > num) {
                                const fecha = require('./../Fecha.js');
                                const fecha_actual = fecha();
                                const hora = require('./../Hora.js');
                                const hora_actual = hora();
                                var reporte = {}
                                if (req.body.puerto == "gsm-4") {
                                    reporte.CHIP = 77487798;
                                }
                                reporte.COD_CLI = datosuno[num].Codigo,
                                    reporte.APELLIDOS_NOMBRES = datosuno[num].Nombre,
                                    reporte.NRO_CEL = datosuno[num].Numero,
                                    reporte.PLAZA = 30,
                                    reporte.AGENCIA = datosuno[num].Agencia,//recordatorio de asfi
                                    reporte.MENSAJE = r.Mensaje,
                                    reporte.FECHA_ENVIO = fecha_actual,
                                    reporte.HORA_ENVIO = hora_actual,
                                    reporte.ENVIADOR = req.user.Usuario
                                let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + datosuno[num].Numero + "&message=" + r.Mensaje + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                                console.log(ruta)
                                
                                //codigo del fetch
                                fetch(ruta)
                                    .then(response => {
                                        return response.json()
                                    }).then(json => {
                                        console.log(json)
                                })                            
                                //codigo del fetch
                                bd.cruds.crudReporte.ingresar(reporte, (r) => {
                                    console.log("Reporte ingresado correctamente", JSON.stringify(r));
                                })
                            } else {
                                console.log("acabamos de mandar todo")
                                //codigo para mandar correo
                                let mensajeenv = 'Se termino de el programado de mensajes de la agencia '+reporte.AGENCIA+"."
                                const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                                var hash = confirmacion(req.user.Usuario, mensajeenv);
                                console.log("se envio el correo", hash) 
                                clearInterval(interval);
                            }
                            num++;
                        });
                        // tiempo de espera por cada mensaje
                    }, 6000);
                }else{
                    console.log("no tenemos saldo ve a comprar credito xd")
                    let mensaje = 'No tiene suficiente credito para programar un envio contace con el siguiente correo : dpcardenas@lapromotora.com.bo'
                    const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                    var hash = confirmacion(req.user.Usuario, mensaje);
                    console.log("se envio el correo", hash)                        
                    
                }
                //CODIGO PARA MANDAR MENSAJES, GUARDAR EN LA BASE DE DATOS Y MANDAR NOTIFICACION
                
                res.render('esperarenvio', { datos: datosuno })
                //aquí es envio de mensajes
            });
        }//aquí termina para mandar 1

    });//final de todos las agencias


    rutas.post('/enviarmensaje', (req, res) => {
        //console.log(req.body)

        console.log(req.body)
        if (req.body.mensajeescrito != "") {
            //req.user.Usuario            
            console.log(req.user.Usuario)
            let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + req.body.numero + "&message=" + req.body.mensajeescrito + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
            console.log(ruta)
            
            fetch(ruta)
             .then(response => {
                 return response.json()
             }).then(json => {
                 console.log(json)
             })
            
            const fecha = require('./../Fecha.js');
            const fecha_actual = fecha();
            console.log(fecha_actual)
            const hora = require('./../Hora.js');
            const hora_actual = hora();
            var reporte = {}
            if (req.body.puerto == "gsm-4") {
                reporte.CHIP = 77487798;
            }
            reporte.COD_CLI = req.body.codigo,
                reporte.APELLIDOS_NOMBRES = req.body.nombre,
                reporte.NRO_CEL = req.body.numero,
                reporte.PLAZA = 30,
                reporte.AGENCIA = req.body.agencia,//recordatorio de asfi
                reporte.MENSAJE = r.Mensaje,
                reporte.FECHA_ENVIO = fecha_actual,
                reporte.HORA_ENVIO = hora_actual,
                reporte.ENVIADOR = req.user.Usuario,

                bd.cruds.crudReporte.ingresar(reporte, (r) => {
                    console.log("Reporte ingresado correctamente", JSON.stringify(r));
                    res.redirect('enviarmensaje')
                });

            let mensaje = 'Mensaje enviado correctamente a ' + reporte.APELLIDOS_NOMBRES + ' con el numero de celular: ' + reporte.NRO_CEL + '.'
            const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
            var hash = confirmacion(req.user.Usuario, mensaje);
            console.log("se envio el correo", hash)
        }
        else {
            bd.cruds.crudMensaje.buscar1(req.body.mensaje, (r) => {
                console.log(r)
                let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + req.body.numero + "&message=" + r.Mensaje + "&[port=" + req.body.puerto + "&][report=String&][timeout=5])"
                console.log(ruta)
                //CODIGO PARA ENVIAR EL MENSAJE                
                
                 fetch(ruta)
                .then(response => {
                   return response.json()
                 }).then(json => {
                     console.log(json)
                })
                
                const fecha = require('./../Fecha.js');
                const fecha_actual = fecha();
                console.log(fecha_actual)
                const hora = require('./../Hora.js');
                const hora_actual = hora();
                var reporte = {}
                if (req.body.puerto == "gsm-4") {
                    reporte.CHIP = 77487798;
                }
                reporte.COD_CLI = req.body.codigo,
                    reporte.APELLIDOS_NOMBRES = req.body.nombre,
                    reporte.NRO_CEL = req.body.numero,
                    reporte.PLAZA = 30,
                    reporte.AGENCIA = req.body.agencia,//recordatorio de asfi
                    reporte.MENSAJE = r.Mensaje,
                    reporte.FECHA_ENVIO = fecha_actual,
                    reporte.HORA_ENVIO = hora_actual,
                    reporte.ENVIADOR = req.user.Usuario,

                    bd.cruds.crudReporte.ingresar(reporte, (r) => {
                        console.log("Reporte ingresado correctamente", JSON.stringify(r));
                        res.redirect('enviarmensaje')
                    });

                let mensaje='Mensaje enviado correctamente a ' + reporte.APELLIDOS_NOMBRES + ' con el numero de celular: ' + reporte.NRO_CEL + '.'
                const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                var hash = confirmacion(req.user.Usuario,mensaje);
                console.log("se envio el correo", hash)

            })
        }
    });





    //funciones

}//cerramos todo

module.exports = actionMensaje;