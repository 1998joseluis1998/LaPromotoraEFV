const xlsx = require('xlsx');
const child=require('child_process')

module.exports = (ruta,nombredoc) => {
    //Aquí abrimos el documento que subieron a la web    
    const fecha=require('./Reporte.js')
    let fecha_actual=fecha();
    console.log(fecha_actual)
    let wbold=xlsx.readFile(ruta); 
    let first=wbold.SheetNames[0];            
    let ws=wbold.Sheets[first];    
    var data=xlsx.utils.sheet_to_json(ws)
    //data son los datos del excel que subio el usuario    
    //console.log(data)
    let wbnew=xlsx.readFile('./src/Public/Archivos/Macros/mensajesprub.xlsm',{ bookVBA: true })
    let cabe=wbnew.SheetNames[0];            
    let wss=wbnew.Sheets[cabe];    
    var datanuestro=xlsx.utils.sheet_to_json(wss)
    console.log(datanuestro)
     
    wbold.vbaraw=wbnew.vbaraw
    xlsx.writeFile(wbold,'./src/Public/Archivos/Enviar/'+nombredoc+'.xlsm');

    let ubi=`Start C:\\Users\\jlrodriguez\\Desktop\\proyecto\\LaPromotoraEFV\\proyectomensajes\\src\\Public\\Archivos\\Enviar\\`+nombredoc+'.xlsm'
    //comando para abrir cmd y iniciar un excel
    console.log(ubi)
    
    //let comando=child.spawn('cmd',['/c',ubi]);    

    comando.stdout.on('data',function(datos){        
        let data=datos.toString()
        console.log(data)
        return data
    })
    comando.stderr.on('error',function(error){
        console.log("error",error)
    })

}
