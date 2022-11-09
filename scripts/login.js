
let formLogin = document.getElementById("formLogin");


const userData = JSON.parse(localStorage.getItem("userData")) || [];


let intentos = 3;

function validateLogin() {

    
    let ingresePass = document.getElementById("passLogin").value;
	let ingreseEmail = document.getElementById("emailLogin").value;

	
	const email = userData.email;
    const pass = userData.pass;

	
	const hayDatosInvalidos = (password, emailUser) => password != pass || emailUser != email;


    if (!hayDatosInvalidos(ingresePass, ingreseEmail)) {
    	Swal.fire(
		'Sesion iniciada',
		'exitos!',
		'success'
	  )

    } else {
		Swal.fire(
			'contraseña o email equivocada',
			`${intentos-1} ${intentos === 2 ?  'intento' : 'intentos'}`,
			'question'
		)
    
	
        if(intentos === 1){
			Swal.fire({
				icon: 'error',
				title: 'contraseña y email incorrectos',
				text: 'intente nuevamente mas tarde',
				
			})

            
            document.getElementById('btnInputLogin').disabled = 'true';
        }
        intentos--;

		
    }
}


formLogin.addEventListener("submit", (e)=>{
	e.preventDefault();

    
	validateLogin();
  }
)




















