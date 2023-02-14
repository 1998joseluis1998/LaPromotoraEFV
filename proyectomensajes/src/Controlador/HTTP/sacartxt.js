const fs = require('fs');

module.exports = (ruta,nombredoc) => {
        
        let archivo=ruta
        console.log("esta es la ruta",archivo)
        let nom=nombredoc
        console.log("este es el nombre",nombredoc)
        var data=fs.readFileSync('./src/Public/Archivos/'+nom,{encoding:'utf-8',flag:'r'})        
        data= data.replaceAll("\r\n","")                 
        data= data.replaceAll(" ","")
        console.log(data.substr(data.length-1))
        if(data.substr(data.length-1)==","){
                console.log("hay una coma")
                data=data.substr(0,data.length-1)
                console.log("Estos son ",data)
        }else{
                console.log("nada p")
        }
        data = data.split(",")        
        console.log(data)                
        return data;
        
       
}