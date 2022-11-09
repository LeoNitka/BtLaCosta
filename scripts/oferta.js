class Publicacion {
    constructor(localidad, nombreDelLugar, direccion, descripcion, puesto){
     this.localidad = localidad;
     this.nombreDelLugar = nombreDelLugar;
     this.direccion = direccion;
     this.descripcion = descripcion;
     this.puesto = puesto;
    }
}
const listaPublicacion = JSON.parse(localStorage.getItem("publicacion")) || [];




const crearPublicacion = (publicacion) => {

    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
           <p class="text-oferta">
           <span>${publicacion.puesto}</span>
           -${publicacion.descripcion}.
           -${publicacion.nombreDelLugar}.
           <span>${publicacion.direccion}</span>
           - <span>${publicacion.localidad}</span>
           </p>

                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);
   
}


listaPublicacion.forEach((publicacion) => crearPublicacion(publicacion));



let publicar= document.querySelector("#formulario")

publicar.addEventListener("submit", (e)=>{
    e.preventDefault();

    let localidad = document.getElementById("localidad").value;
    let nombreDelLugar = document.getElementById("nombreDelLugar").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;
    let puesto = document.getElementById("puesto").value;

    let nuevaPublicacion = new Publicacion(localidad, nombreDelLugar, direccion, descripcion, puesto);
    listaPublicacion.push(nuevaPublicacion);
    localStorage.setItem("publicacion", JSON.stringify(listaPublicacion));
    clearInput()

    crearPublicacion(nuevaPublicacion);
    Toastify({

        text: "Publicacion realizada",
        
        duration: 5000
        
        }).showToast();


    console.log(listaPublicacion)



    
   

})

// Buscador

document.querySelector('#botonBuscador').addEventListener('click', 
function searchPost(e){
    e.preventDefault();
    
   
    const searchValue = document.querySelector('#buscarPalabra').value.toUpperCase();
    const searchValue2 = document.querySelector('#buscarLocalidad').value.toUpperCase();
 
    const allPosts = (document.querySelector('.listOferta')).querySelectorAll('div');
   
    for(let i = 0; i < allPosts.length; i++){
        let count = 0;
       
        const postValues = allPosts[i].querySelectorAll('span,p');
        for(let j = 0; j < postValues.length; j++){
           
            if((postValues[j].innerHTML.toUpperCase()).includes(searchValue) && (postValues[j].innerHTML.toUpperCase()).includes(searchValue2)  ) {
                count++;
            } 
        }
        if(count > 0){
            
            allPosts[i].style.display = '';
        }else{
            
            allPosts[i].style.display = 'none';
        }
    }
    
})


fetch("../publicacionesOferta.json")
    .then(response => response.json())
    .then(result => {
        const datos = result;
        datos.forEach(dato => {
            crearPublicacion(dato)
        })
    })

    fetch("../localidades.json")
    .then(response => response.json())
    .then(result => {
        const datos = result;
        datos.forEach(dato => {
            crearLocalidad(dato)
        })
    })


    const crearLocalidad = (localidad) => {

        let option = document.createElement("option");
            option.innerHTML = `
                                  ${localidad.localidad}
                                         `;
            document.querySelector("#localidad").append(option);
    }

    const clearInput = () => {
      
        const inputs = document.querySelectorAll('.input-text');
  
        inputs.forEach((input) => input.value = '');
    }

    

