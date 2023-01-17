var usuario = (rutas, bd) => {
         
    rutas.get('/', (req, res) => {
        res.redirect('/iniciosesion')
    })

    rutas.get('/iniciosesion', (req, res) => {
        res.render("iniciosesion");//urilizar render(SOLO EL NOMBRE DEL EJS en vista)
    });   

    rutas.get('/inicioadmin', (req, res) => {
        res.render("inicioadmin");//urilizar render(SOLO EL NOMBRE DEL EJS en vista)
    });   
    
    rutas.get("/cerrarsesion", (req, res) => {
        req.logout(req.user, err => {
            if (err) return next(err);
            res.redirect("/iniciosesion");
        });
    });
     
    rutas.get('/crearusuario',(req,res)=>{
        res.render('crearusuario')
    })

    rutas.get('/verusuario', (req, res) => {
        bd.cruds.crudUsuario.buscarusuario({}, (usuarios) => {
            //despues de la coma son los datos
            res.render('verusuario', { usuarios })
        })
    })

    rutas.get('/modificarusuario', (req, res) => {
        res.render('modificarusuario')
    })

    rutas.get('/eliminarusuario/:id', (req, res) => {
        var id = req.params.id
        bd.cruds.crudUsuario.eliminar(id, () => {
            res.redirect("/verusuario")
        })
    })
}

module.exports = usuario;
