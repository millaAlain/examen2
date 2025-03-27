function verificarEdad(edad) {
    let mensaje;

    /**if (edad = 18) mensaje = "Justo tienes 18"; 

    if (edad > 18) mensaje = "Eres mayor de edad";

    if (edad < 18) mensaje = "Eres menor de edad"; 

    if (edad >= 21) permiso = "Puedes beber alcohol"; 

    console.log(mensaje, permiso, resultadoFinal);*/

    if(edad == 18){
        mensaje = "Justo tienes 18";
    } else if (edad > 18){
        mensaje = "Eres mayor de edad";
    } else if(edad >= 21){
        mensaje = "Puedes beber alcohol";
    }else{
        mensaje = "Eres menor de edad";
    }

    console.log(mensaje);
}

verificarEdad(20);
// 'Eres mayor de edad'