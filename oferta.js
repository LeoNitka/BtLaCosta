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
     this.almacenar=[]
    }

    almacenarPubli(){

       this.almacenar.push(this.localidad,this.nombreDelLugar,this.direccion,this.descripcion);
    }
}



const listaPublicacion = [
    {localidad: 'San Bernardo', 
     nombreDelLugar:'Barbaros ',
     direccion: 'Av.San Bernardo 200',
     descripcion:'Se busca ayudante de cocina y camarera',
    },
    {
    localidad: 'Mar de ajo', 
    nombreDelLugar:'Pimenton',
    direccion: 'Hipolito Yrigoyen 51',
    descripcion:'Se necesito mozo/camarera con experiencia',   
    }
];


console.log(listaPublicacion);



const crearPublicacion = ()=> {
    let localidad = prompt("seleccionar localidad");
    let nombreDelLugar = prompt("ingresar nombre del lugar");
    let direccion = prompt("ingresar direccion");
    let descripcion = prompt("ingresar descripcion");

    
    let publicacion = new Publicacion(localidad,nombreDelLugar,direccion,descripcion);
    listaPublicacion.push(publicacion);
    console.log(listaPublicacion);
    return listaPublicacion;
}

crearPublicacion();








