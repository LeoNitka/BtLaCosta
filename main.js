alert("CREA TU CUENTA");  // CREAR LA CUENTA

let nombre = prompt("Cual es tu nombre");
let apellido = prompt("cual es tu apellido?");
let dni = parseInt(prompt("cual es tu DNI"));
let celular = parseInt(prompt("cual es tu numero"));
let email = prompt("cual es tu email");
let contraseña = prompt("cual es tu contraseña");
alert("EL REGISTRO FUE EXITOSO");


alert( "AHORA INICIE LA SESION");
let ingreseEmail = prompt("ingrese email");
let ingreseContraseña = prompt("ingrese contraseña");

if(ingreseEmail==email && ingreseContraseña==contraseña ){      // LOGIN AL SISTEMA
    alert('INGRESE AL SISTEMA'); 
  } else {
    alert('EMAIL / PASSWORD ERRONEAS')
  }

  // VALIDACION DE EMAIL Y CONTRASEÑA

let intentos = 3;

 while((ingreseContraseña != contraseña) || (ingreseEmail != email) && (intentos > 0)) {
    intentos--;
    alert(`CONTRASEÑA Y/O EMAIL EQUIVOCADOS. TE QUEDAN ${intentos} INTENTOS`);
    if(intentos == 0) {
        break;
    }
    ingreseEmail= prompt("cual es tu email")
    ingreseContraseña = prompt("Cual es la contrasenia");

}




