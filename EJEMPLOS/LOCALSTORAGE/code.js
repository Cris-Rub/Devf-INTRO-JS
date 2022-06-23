let nombre='Pepe';

let items=['uno','dos','tres','cuatro'];

let persona={
    nombre:'andres',
    edad: 23,
    pais: 'Colombia'
}

const textAbout=document.querySelector('#textAbout');

//localStorage.setItem(key,value);  Acceder al metodo localStorage, permite enviar informacion al local Stotareg
//Va a recibir una key y un value
//Ejemplo:
//localStorage.setItem('pais','Mexico');

function add(){
    localStorage.setItem('pais',nombre); //Solo reconoce Strings
    localStorage.setItem('items', JSON.stringify(items)); //Lo pasa a string para evitar cualquier error
    localStorage.setItem('persona',JSON.stringify(persona));
}

// function obtenerDatos(){
//     let nombre=localStorage.getItem('pais'); //Recoger key
//     let items=JSON.parse(localStorage.getItem('items')); //Lo deja como objeto, no como string
//     let obj=localStorage.getItem('persona');

//     if(nombre){console.log(nombre);}

// }

function eliminarDato(e){
    localStorage.removeItem(e);
}

function eliminarTodo(){
    localStorage.clear();
}
 //Perimite actualizar el contenido
function actualizarContenido(){
    let titulo=localStorage.getItem('pais');
    let obj=JSON.parse(localStorage.getItem('persona'));
    textAbout.textContent=`Conoce más sobre ${titulo} que tiene ${obj.edad} años`;
}

add();
obtenerDatos();
// eliminarDato('pais');
// eliminarTodo();
actualizarContenido();