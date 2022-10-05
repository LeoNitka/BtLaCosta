class PublicacionDemanda {
    constructor(descripcion){
     this.descripcion = descripcion;
     
    }
}

const publiD2 = new PublicacionDemanda("Me ofrezco como mozo, comisse para esta temporada, dejo mi cv adjunto");
const publiD3 = new PublicacionDemanda("Busco trabajo turno noche sereno o recepcionista");
console.log(publiD2);
console.log(publiD3);

const crearPublicacionDemanda = ()=> {
    let descripcion = prompt("ingresar descripcion");

    
    const publicacion = new PublicacionDemanda(descripcion);
    console.log(publicacion);
    return publicacion;
}

crearPublicacionDemanda();