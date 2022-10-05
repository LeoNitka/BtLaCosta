
// NUEVO CODIGO
alert("CREA TU CUENTA");  // CREAR LA CUENTA

let nombre = prompt("Cual es tu nombre");
let apellido = prompt("cual es tu apellido?");
let dni = parseInt(prompt("cual es tu DNI"));
let celular = parseInt(prompt("cual es tu numero"));
let email = prompt("cual es tu email");
let pass = prompt("cual es tu contraseña");
alert("EL REGISTRO FUE EXITOSO");

const hayDatosInvalidos = (password, emailUser) => password != pass || emailUser != email;

alert("AHORA INICIE LA SESION");

let ingreseEmail = prompt("ingrese email");
let ingresePass = prompt("ingrese contraseña");

if (!hayDatosInvalidos(ingresePass, ingreseEmail)) {
	alert("INGRESO AL SISTEMA");
} else {
	alert("EMAIL / PASSWORD ERRONEAS");
}

let intentos = 3;

while (hayDatosInvalidos(ingresePass, ingreseEmail) && intentos > 0) {
	intentos--;
	alert(`CONTRASEÑA Y/O EMAIL EQUIVOCADOS. TE QUEDAN ${intentos} INTENTOS`);
	if (intentos == 0) {
		break;
	}
	ingreseEmail = prompt("cual es tu email");
	ingresePass = prompt("Cual es la contrasenia");
}


