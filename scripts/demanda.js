class PublicacionDemanda {
    constructor(descripcion, img){
     this.descripcion = descripcion;
     
    }
}

// const publiD2 = new PublicacionDemanda("Me ofrezco como mozo, comisse para esta temporada, dejo mi cv adjunto");
// const publiD3 = new PublicacionDemanda("Busco trabajo turno noche sereno o recepcionista");

const listaPublicacionDemanda = JSON.parse(localStorage.getItem("publicacionDemanda")) || [];

const crearPublicacionDemanda = (publicacionDemanda)=> {
    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
                               
                                 <p class="text-oferta">
                                 ${publicacionDemanda.descripcion}
                                 </p>
                                
                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);
}

listaPublicacionDemanda.forEach((publicacionDemanda) => crearPublicacionDemanda(publicacionDemanda));


let publicar= document.querySelector("#formulario2")

publicar.addEventListener("submit", (e)=>{
    e.preventDefault();


    let descripcion = document.getElementById("descripcion").value;
   


    let nuevaPublicacion = new PublicacionDemanda(descripcion);
    listaPublicacionDemanda.push(nuevaPublicacion);
    localStorage.setItem("publicacionDemanda", JSON.stringify(listaPublicacionDemanda));
    clearInput()

    crearPublicacionDemanda(nuevaPublicacion);
    Toastify({

        text: "Publicacion realizada",
        
        duration: 5000
        
        }).showToast();
    console.log(listaPublicacionDemanda)


})

fetch("../publicacionesDemanda.json")
    .then(response => response.json())
    .then(result => {
        const datos = result;
        datos.forEach(dato => {
            crearPublicacionDemanda(dato)
        })
    })

    const clearInput = () => {
      
        const inputs = document.querySelectorAll('.input-text');
  
        inputs.forEach((input) => input.value = '');
    }
