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
    
    rutas.post('/sacar',upload.single('excels'),(req,res)=>{                        
        console.log(req.file)
        let nombre=req.file.originalname
        let nom=nombre.slice(0, -5)
        
        //mandamos al codigo para reemplazar
        const excel = require('./../Importar.js');
        var datos=excel(req.file.path,nom)                
        //listo pues
        //res.render('esperarenvio',{datos:"no"})
    });

    rutas.post('/send',(req,res)=>{

    })





}
module.exports=actionWhatsapp;