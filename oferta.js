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

const publi1 = new Publicacion("San Bernardo", "barbaros", "Av.sanBernardo 200", "Se busca ayudante de cocina y camarera");
const publi2 = new Publicacion("Mar De Ajo", "Pimenton", "Hipolito Yrigoten 51",  "Se necesito mozo/camarera con experiencia");
console.log(publi1);
console.log(publi2);


const crearPublicacion = ()=> {
    let localidad = prompt("seleccionar localidad");
    let nombreDelLugar = prompt("ingresar nombre del lugar");
    let direccion = prompt("ingresar direccion");
    let descripcion = prompt("ingresar descripcion");

    
    const publicacion = new Publicacion(localidad,nombreDelLugar,direccion,descripcion);
    console.log(publicacion);
    return publicacion;
}

crearPublicacion();



