var mensaje = (rutas, bd) => {
    //
    
    rutas.get('/enviarmensaje', (req, res) => {
        console.log("usuario",req.user)
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
            //despues de la coma son los datos
            res.render('enviarmensaje', { mensajes, datos: "no" })            
        })  
        
    })

    rutas.get('/saldo', (req, res) => {        
        res.render('saldo')    
    })


    
    rutas.get('/enviarmasivo',(req,res)=>{
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
            //despues de la coma son los datos
            res.render('enviarmasivo', { mensajes })
        })          
    })

    rutas.get('/crearmensaje', (req, res) => {
        res.render('crearmensaje')
    })

    //hacer en el 
    rutas.get('/vermensaje', (req, res) => {
        bd.cruds.crudMensaje.buscarmensaje({},(mensajes)=>{
            //despues de la coma son los datos
            res.render('vermensaje',{mensajes})
        })        
    })

    rutas.get('/eliminarmensaje/:id',(req,res)=>{        
        var id=req.params.id
        bd.cruds.crudMensaje.eliminar(id,()=>{
            res.redirect("/vermensaje")
        })        
    })

    rutas.get('/esperarenvio',(req,res)=>{
        res.render('esperarenvio')
    })
}

module.exports = mensaje;
