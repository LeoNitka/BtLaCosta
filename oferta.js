class Publicacion {
    constructor(localidad, nombreDelLugar, direccion, descripcion){
     this.localidad = localidad;
     this.nombreDelLugar = nombreDelLugar;
     this.direccion = direccion;
     this.descripcion = descripcion;
    }
}
const listaPublicacion = JSON.parse(localStorage.getItem("publicacion")) || [];

// const listaPublicacion = [ 
//     {id:1,
//      localidad: 'San Bernardo', 
//      nombreDelLugar:'Barbaros ',
//      direccion: 'Av.San Bernardo 200',
//      descripcion:'Se busca ayudante de cocina y camarera',
//     },
//     {
//     id:2, 
//     localidad: 'Mar de ajo', 
//     nombreDelLugar:'Pimenton',
//     direccion: 'Hipolito Yrigoyen 51',
//     descripcion:'Se necesito mozo/camarera con experiencia',   
//     }
// ];


const crearPublicacion = (publicacion) => {

    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
                                 <h3>${publicacion.localidad}</h3>  
                                 <h3>${publicacion.nombreDelLugar}</h3>
                                 <h3>${publicacion.direccion}</h3>
                                 <p class="text-oferta">
                                 ${publicacion.descripcion}
                                 </p>
                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);
}

// Display publicaciones en el documento
listaPublicacion.forEach((publicacion) => crearPublicacion(publicacion));


// Add event 
let publicar= document.querySelector("#formulario")

publicar.addEventListener("submit", (e)=>{
    e.preventDefault();

    let localidad = document.getElementById("localidad").value;
    let nombreDelLugar = document.getElementById("nombreDelLugar").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;

    let nuevaPublicacion = new Publicacion(localidad, nombreDelLugar, direccion, descripcion);
    listaPublicacion.push(nuevaPublicacion);
    localStorage.setItem("publicacion", JSON.stringify(listaPublicacion));

    crearPublicacion(nuevaPublicacion);
    console.log(listaPublicacion)



    
   

})









