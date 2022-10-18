// alert("REALIZE UNA PUBLICACION");  // CREAR UNA PUBLICACION

// let localidad = prompt("seleccionar localidad");
// let nombreDelLugar = prompt("ingresar nombre del lugar");
// let direccion = prompt("ingresar direccion");
// let descripcion = prompt("ingresar descripcion");
// console.log(localidad);
// console.log(nombreDelLugar);
// console.log(direccion);
// console.log(descripcion);
// alert("PUBLICACION EXITOSA");

//NUEVO
class Publicacion {
    constructor(localidad,nombreDelLugar,direccion,descripcion){
     this.localidad = localidad;
     this.nombreDelLugar = nombreDelLugar;
     this.direccion = direccion;
     this.descripcion = descripcion;
    
    }

    
}



const listaPublicacion = [ 
    {id:1,
     localidad: 'San Bernardo', 
     nombreDelLugar:'Barbaros ',
     direccion: 'Av.San Bernardo 200',
     descripcion:'Se busca ayudante de cocina y camarera',
    },
    {
    id:2, 
    localidad: 'Mar de ajo', 
    nombreDelLugar:'Pimenton',
    direccion: 'Hipolito Yrigoyen 51',
    descripcion:'Se necesito mozo/camarera con experiencia',   
    }
];


console.log(listaPublicacion);



const crearPublicacion = ()=> {
    let localidad = document.getElementById("localidad").value;
    let nombreDelLugar = document.getElementById("nombreDelLugar").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;

    let nuevaPublicacion = new Publicacion(localidad,nombreDelLugar,direccion,descripcion);
    listaPublicacion.push(nuevaPublicacion);
}

listaPublicacion.forEach(publicacion => {
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
})

let publicar= document.querySelector(".input-boton")

publicar.addEventListener ("submit", ()=>{

        crearPublicacion();
}
)








