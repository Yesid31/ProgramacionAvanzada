function ValidarUsuario (usuario,ContraseñaUno,ContraseñaDos){
    if (ContraseñaUno.length<8 ){
        return "Vuelve A Intentarlo"
    }else if (ContraseñaUno!=ContraseñaDos) {
        return "Vuelve a intentarlo"
    }else {
        return "Bienvenido"
    }
}   

let resultado=ValidarUsuario("Vegeta777","admin","admin")
console.log(resultado)