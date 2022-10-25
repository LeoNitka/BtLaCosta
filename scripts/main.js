
// CREAR LA CUENTA

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let dni = document.getElementById("DNI").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;
let formCrear = document.getElementById("formCrear");
let formLogin = document.getElementById("formLogin");

formCrear.addEventListener("submit", (e)=>{
e.preventDefault();
	Swal.fire(
		'Cuenta creada!',
		'Te damos la bienvenida!',
		'success'
		
	  )

}
)



const hayDatosInvalidos = (password, emailUser) => password != pass || emailUser != email;



let ingreseEmail = document.getElementById("emailLogin").value;
let ingresePass = document.getElementById("passLogin").value;

if (!hayDatosInvalidos(ingresePass, ingreseEmail)) {
	Swal.fire(
		'Sesion iniciada',
		'exitos!',
		'success'
	  )
} else {
	Swal.fire(
		'contraseña o email equivocada',
		'intente nuevamente',
		'question'
	  )
}

let intentos = 3;

while (hayDatosInvalidos(ingresePass, ingreseEmail) && intentos > 0) {
	intentos--;
	Swal.fire(`TE QUEDAN ${intentos} INTENTOS`) ;
	if (intentos == 0) {
		Swal.fire({
			icon: 'error',
			title: 'Contraseña o email equivocadas',
			text: 'Ya no quedan mas intentos',
			text: 'Intente nuevamente',
			
		  })
		break;
	}
	let ingreseEmail = document.getElementById("emailLogin").value;
    let ingresePass = document.getElementById("passLogin").value;

}

formLogin.addEventListener("submit", (e)=>{

	e.preventDefault();

	hayDatosInvalidos();

	}
)

