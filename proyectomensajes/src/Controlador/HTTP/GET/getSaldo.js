var saldo=(rutas,bd)=>{

    rutas.get('/saldo', (req, res) => {
        res.render('saldo')
    })

}

module.exports=saldo;