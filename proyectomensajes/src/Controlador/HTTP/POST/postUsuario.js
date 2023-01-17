var actionUsuario = (rutas, bd, passport) => {
    rutas.post('/crearusuario', (req, res) => {
        var Usuario = {
            //mandamos los campos para la base de datos(name="")
            Usuario:req.body.username,
            Contra:req.body.contraseña,            
            Habilitado:req.body.habilitado
        };

    bd.cruds.crudUsuario.ingresar(Usuario,(r)=>{
        console.log("Usuario ingresado correctamente",JSON.stringify(r));
        res.redirect('verusuario')
    })                     

    });
    
    rutas.post("/iniciarSesion", passport.authenticate("iniciar sesion",
        {
            successRedirect: '/enviarmensaje',
            failureRedirect: "/iniciosesion",
            failureFlash: true,
        })
        
    );
    
    
    //funciones

    


}//cerramos todo

module.exports = actionUsuario;