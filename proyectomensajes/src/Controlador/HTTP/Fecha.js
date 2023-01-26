module.exports=()=>{
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    fecha_envio = `${dia}/${mes}/${anio}`
    return fecha_envio
}