var actionSaldo=(rutas,bd)=>{
    
    rutas.post('/consultar',(req,res)=>{
        let num=7255 ; let puerto="gsm-4" ;let msg="saldo"
        let ruta = "http://172.24.170.20:80/sendsms?username=smsuser&password=contra&phonenumber=" + num+ "&message=" + msg + "&[port=" + puerto + "&][report=String&][timeout=2])"
        fetch(ruta)
        .then(response => {
            return response.json()
        })
        
    })



    
    rutas.post('/enviarsaldo',(req,res)=>{          
        console.log(req.body.val)
        bd.cruds.crudMensaje.buscarmensaje({}, (mensajes) => {
            res.render('enviarmasivo', { mensajes,saldo:req.body.val})
        })                  
    });

    
}
module.exports=actionSaldo;