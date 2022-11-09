
let formCrear = document.getElementById("formCrear");


const userData = JSON.parse(localStorage.getItem("userData")) || [];


formCrear.addEventListener("submit", (e)=>{
      e.preventDefault();

   
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const dni = document.getElementById("DNI").value;
      const email = document.getElementById("email").value;
      const pass = document.getElementById("pass").value;

      let userData = {nombre, apellido, dni, email, pass};
      localStorage.setItem("userData", JSON.stringify(userData));

	  Swal.fire(
		'Cuenta creada!',
		'Te damos la bienvenida!',
		'success'
		
	  )

}
)
