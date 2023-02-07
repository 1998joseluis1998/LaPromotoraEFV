var saldo=(rutas,bd)=>{

    rutas.get('/saldo', (req, res) => {                       
        if(req.query.message){
            let mensajeSaldo =req.query.message
            const textoSaldo = "Saldo Total:"
            const ind = mensajeSaldo.indexOf(textoSaldo)
            let saldo = mensajeSaldo.slice(ind+textoSaldo.length+1).split(" ")[0]
            console.log(saldo)                             
            res.render('saldo',{saldito:saldo})
        }
        else{
            res.render('saldo')
        }
        
    })

}

module.exports=saldo;