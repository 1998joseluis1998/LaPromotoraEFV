module.exports=()=>{
let hora_env = new Date();
let hora = hora_env.getHours();
let min = hora_env.getMinutes();
let second = hora_env.getSeconds();
let hora_envio = `${hora}:${min}:${second}`
return hora_envio
}
