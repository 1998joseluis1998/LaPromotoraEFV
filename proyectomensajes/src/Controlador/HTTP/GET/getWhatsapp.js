var Whatsapp=(rutas)=>{
    rutas.get('/mensajewhatsapp',(req,res)=>{        
        res.render("mensajewhatsapp")
    })

    rutas.get('/imagenwhatsapp',(req,res)=>{        
        res.render("imagenwhatsapp")
    })

    rutas.get('/videowhatsapp',(req,res)=>{        
        res.render("videowhatsapp")
    })

    rutas.get('/deudorwhatsapp',(req,res)=>{        
        res.render("deudorwhatsapp")
    })




}

module.exports=Whatsapp;