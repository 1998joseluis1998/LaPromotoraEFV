var actionSaldo=(rutas,bd)=>{
    rutas.post('/enviarsaldo',(req,res)=>{  
        console.log(req.body.val)
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
            res.render('enviarmasivo', { mensajes,saldo:req.body.val})
        })          
    });
}
module.exports=actionSaldo;