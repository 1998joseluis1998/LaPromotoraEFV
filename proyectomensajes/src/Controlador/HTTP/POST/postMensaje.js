const { Console } = require('console');

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
   
    rutas.post('/enviarmasivo', (req, res) => {
        //codigo para sacar de uno
        var conta = req.body.val        
        console.log(conta)                
        
        for(var i=0;i<conta;i++){
            if(i==0){
                var cliente1 = {}                
                if (req.body.masagencia1 != "") {
                    cliente1.Agencia = {
                        valor: parseInt(req.body.masagencia1),
                        tipo: 'igual'
                    }
                }
                var porcen1 = req.body.porcentaje1
                bd.cruds.crudCliente.buscarcliente(cliente1, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia1)+":", r.length)                 
                    var resul1 = Math.ceil(r.length * (porcen1 / 100))
                    console.log("porcentaje a conseguir es: ",porcen1)
                    var datostotal1 = []
                    for (var i = 0; i < resul1; i++) {        
                        datostotal1.push(r[i])
                    }
                    
                    console.log("cantidad clientes",datostotal1.length) 
                    console.log(datostotal1[0])                   
                });
            }
            if (i == 1) {
                var cliente2 = {}
                if (req.body.masagencia2 != "") {
                    cliente2.Agencia = {
                        valor: parseInt(req.body.masagencia2),
                        tipo: 'igual'
                    }
                }
                var porcen2 = req.body.porcentaje2
                bd.cruds.crudCliente.buscarcliente(cliente2, (r) => {   
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia2) + ":", r.length)                                  
                    var resul = Math.ceil(r.length * (porcen2 / 100))                    
                    console.log("porcentaje a conseguir es: ",porcen2)
                    var datostotal2 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal2.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal2.length)
             
                });
            }
            if (i == 2) {
                var cliente3 = {}
                if (req.body.masagencia3 != "") {
                    cliente3.Agencia = {
                        valor: parseInt(req.body.masagencia3),
                        tipo: 'igual'
                    }
                }
                var porcen3 = req.body.porcentaje3
                bd.cruds.crudCliente.buscarcliente(cliente3, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia3) + ":", r.length)                 
                    var resul = Math.ceil(r.length * (porcen3 / 100))
                    console.log("porcentaje a conseguir es: ",porcen3)
                    var datostotal3 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal3.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal3.length)
                });
            }
            if (i == 3) {
                var cliente4 = {}
                if (req.body.masagencia4 != "") {
                    cliente4.Agencia = {
                        valor: parseInt(req.body.masagencia4),
                        tipo: 'igual'
                    }
                }
                var porcen4 = req.body.porcentaje4
                bd.cruds.crudCliente.buscarcliente(cliente4, (r) => { 
                    console.log("el mensaje a enviar es", req.body.mensaje)    
                    console.log("total clientes de la agencia " + (req.body.masagencia4) + ":", r.length)                                
                    var resul = Math.ceil(r.length * (porcen4 / 100))                    
                    console.log("porcentaje a conseguir es: ",porcen4)
                    var datostotal4 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal4.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal4.length)

                });
            }
            if (i == 4) {
                var cliente5 = {}
                if (req.body.masagencia5 != "") {
                    cliente5.Agencia = {
                        valor: parseInt(req.body.masagencia5),
                        tipo: 'igual'
                    }
                }
                var porcen5 = req.body.porcentaje5
                bd.cruds.crudCliente.buscarcliente(cliente5, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia5) + ":", r.length)                 
                    var resul = Math.ceil(r.length * (porcen5 / 100))
                    console.log("porcentaje a conseguir es: ",porcen5)
                    var datostotal5 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal5.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal5.length)
                });
            }
            if (i == 5) {
                var cliente6 = {}
                if (req.body.masagencia6 != "") {
                    cliente6.Agencia = {
                        valor: parseInt(req.body.masagencia6),
                        tipo: 'igual'
                    }
                }
                var porcen6 = req.body.porcentaje6
                bd.cruds.crudCliente.buscarcliente(cliente6, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia6) + ":", r.length)                 
                    var resul = Math.ceil(r.length * (porcen6 / 100))                    
                    console.log("porcentaje a conseguir es: ",porcen6)
                    var datostotal6 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal6.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal6.length)

                });
            }
            if (i == 6) {
                var cliente7 = {}
                if (req.body.masagencia7 != "") {
                    cliente7.Agencia = {
                        valor: parseInt(req.body.masagencia7),
                        tipo: 'igual'
                    }
                }
                var porcen7 = req.body.porcentaje7
                bd.cruds.crudCliente.buscarcliente(cliente7, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    console.log("total clientes de la agencia " + (req.body.masagencia7) + ":", r.length)                 
                    var resul = Math.ceil(r.length * (porcen7 / 100))
                    console.log("porcentaje a conseguir es: ",porcen7)
                    var datostotal7 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal7.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal7.length)
                });
            }
            if (i == 7) {
                var cliente8 = {}
                if (req.body.masagencia8 != "") {
                    cliente8.Agencia = {
                        valor: parseInt(req.body.masagencia8),
                        tipo: 'igual'
                    }
                }
                var porcen8 = req.body.porcentaje8
                bd.cruds.crudCliente.buscarcliente(cliente8, (r) => {
                    console.log("el mensaje a enviar es", req.body.mensaje)
                    var resul = Math.ceil(r.length * (porcen8 / 100))
                    console.log("total clientes de la agencia " + (req.body.masagencia8), r.length)
                    console.log("porcentaje a conseguir es: ",porcen8)
                    var datostotal8 = []
                    for (var i = 0; i < resul; i++) {
                        datostotal8.push(r[i])
                    }
                    console.log("cantidad clientes", datostotal8.length)

                });
            }


        };//final del for de las agencias 
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {            
            res.render("enviarmasivo", { mensajes})
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

                let hora_env=new Date();
                let hora=hora_env.getHours();
                let min=hora_env.getMinutes();
                let second=hora_env.getSeconds();
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
                    let dia =fecha.getDate();
                    let mes=fecha.getMonth()+1;
                    let anio=fecha.getFullYear();
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
                    const confirmacion = require('./../../../Modelo/Confirmar/Confirmar.js');
                    var hash = confirmacion(req.user.Usuario);                    
                    console.log("se envio el correo",hash)
                    var reporte = {}
                    if (req.body.puerto=="gsm-4"){
                        reporte.CHIP=73348513;
                    }                    
                    reporte.COD_CLI= req.body.codigo,
                    reporte.APELLIDOS_NOMBRES= req.body.nombre,
                    reporte.NRO_CEL= req.body.numero,
                    reporte.PLAZA= 30,
                    reporte.AGENCIA= req.body.agencia,//recordatorio de asfi
                    reporte.MENSAJE= r.Mensaje,
                    reporte.FECHA_ENVIO= fecha_envio,
                    reporte.HORA_ENVIO= hora_envio,
                    reporte.ENVIADOR= req.user.Usuario,                                                                        
                    
                    bd.cruds.crudReporte.ingresar(reporte,(r)=>{
                        console.log("Reporte ingresado correctamente", JSON.stringify(r));
                        res.redirect('enviarmensaje')
                    })

            })
        }        
    });





    //funciones

}//cerramos todo

module.exports = actionMensaje;