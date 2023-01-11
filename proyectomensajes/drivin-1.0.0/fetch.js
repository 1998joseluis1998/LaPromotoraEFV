const valores = () =>{    
    let user=document.getElementById('username').value;
    let pass=document.getElementById('contraseña').value;
    let destino=document.getElementById('numero').value;
    let mensaje=document.getElementById('mensaje').value;
    let combo=document.getElementById('puerto');
    
    var puerto= combo.options[combo.selectedIndex].text;
    document.getElementById("valores").innerHTML =`user: ${user} password: ${pass} destino: ${destino} mensaje: ${mensaje}`;
    let ruta="http://172.24.170.20:80/sendsms?username="+user+"&password="+pass+"&phonenumber="+destino+"&message="+mensaje+"&[port="+puerto+"&][report=String&][timeout=5])"
    console.log(ruta)
    return ruta 
    
}

const ruta=()=>{
    var rutaAccess=valores();
    console.log(rutaAccess)
}

const prueba=()=>{
    var rutaA=valores();
    document.getElementById("valores").innerHTML=rutaA
}

//esto es para mandar el mensaje
const obtener=()=>{
    var rutaFetch=valores();
    fetch(rutaFetch)
    .then(response=>{
        return response.json()
    }).then(json=>{
        console.log(json)
    })   
}

