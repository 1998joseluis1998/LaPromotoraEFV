const xlsx=require('xlsx')
const multer =require('multer')

const storage=multer.diskStorage(
    {
        destination:'./src/Public/Archivos/',
        filename: function(req,file,cb){
            cb(null,file.originalname);            
        }
    }
)

const upload = multer({
     storage: storage
    })

var actionWhatsapp=(rutas)=>{

    //Enviarmensaje
    rutas.post('/msgwhatsapp',upload.single('excelmsg'),(req,res)=>{                        
        console.log(req.file)
        let nombre=req.file.originalname
        let nom=nombre.slice(0, -5)
        
        //mandamos al codigo para reemplazar
        const excel = require('./../Importar.js');
        var datos=excel(req.file.path,nom)                
        //listo pues
        //registrar a la base de datos.



        
        //res.render('esperarenvio',{datos:"no"})
    });
    rutas.post('/imgwhatsapp',upload.single('excelimg'),(req,res)=>{                        
        console.log(req.file)
        let nombre=req.file.originalname
        let nom=nombre.slice(0, -5)
        
        //mandamos al codigo para reemplazar
        const excel = require('./../Importar.js');
        var datos=excel(req.file.path,nom)                
        //listo pues
        //res.render('esperarenvio',{datos:"no"})
    });

    rutas.post('/vidwhatsapp',upload.single('excelvid'),(req,res)=>{                        
        console.log(req.file)
        let nombre=req.file.originalname
        let nom=nombre.slice(0, -5)
        
        //mandamos al codigo para reemplazar
        const excel = require('./../Importar.js');
        var datos=excel(req.file.path,nom)                
        //listo pues
        //res.render('esperarenvio',{datos:"no"})
    });

    rutas.post('/deuwhatsapp',upload.single('exceldeu'),(req,res)=>{                        
        console.log(req.file)
        let nombre=req.file.originalname
        let nom=nombre.slice(0, -5)
        
        //mandamos al codigo para reemplazar
        const excel = require('./../Importar.js');
        var datos=excel(req.file.path,nom)                
        //listo pues
        //res.render('esperarenvio',{datos:"no"})
    });   





}
module.exports=actionWhatsapp;