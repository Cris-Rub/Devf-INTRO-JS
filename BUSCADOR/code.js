//Captura de variables

const formBusqueda=document.querySelector('#form-busqueda');
const inputName=document.querySelector('#inputName');
const inputGenre=document.querySelector('#inputGenre');
const inputYear=document.querySelector('#inputYear');
const boxPeliculas=document.querySelector('#box-peliculas');


//Crear objeto que guarde la seleccion de busqueda del usuario

const datosBusqueda={
    nombre: '',
    genero:'',
    year: ''
}

//Crear evento para mostrar información al cargar la página
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarHTML(peliculas);
});

//Crear funcion que muestra contenido
function mostrarHTML(peliculas){
    limpiarHTML();

    peliculas.forEach(pelicula => {
        // console.log(pelicula.nombre);
        const {nombre, genero, year, descripcion, image}=pelicula;
        const cardPelicula=document.createElement('div'); //Crear div en box-peliculas
        // cardPelicula.classList.add('col, mb-3'); //Se añaden las clases a cada div
        cardPelicula.innerHTML=`
        <div class="card bg-secondary flex-row">
            <div class="w-50">
                <img src="${image}" class="img-fluid object-fit" alt="">
            </div>
            <div class="card-body">
                <h2 class="card-title">${nombre}</h2>
                <p class="card-text mb-1">Genero: ${genero}</p>
                <p class="card-text mb-1">Año: ${year}</p>
                <p class="card-text mb-0">Descripción: ${descripcion}</p>
            </div>
        </div>
        `
        boxPeliculas.appendChild(cardPelicula); //Agregar elemento que yo le ponga con los parametros que se le den

    });
    //boxPeliculas.appendChild(cardPelicula); //Agregar elemento que yo le ponga con los parametros que se le den
}

//Crear evento de envio, aqui se hace el filtro
formBusqueda.addEventListener('submit', (e)=>{
    e.preventDefault();
    datosBusqueda.nombre=inputName.value.toLowerCase(); //toLowerCase lo pasa a minusculas el string
    datosBusqueda.genero=inputGenre.value.toLowerCase();
    datosBusqueda.year=inputYear.value;

    filtrarPeliculas(); //Llama a funcion que filtra los datos de busqueda

    formBusqueda.reset(); //Se resetea los valores del id
});

// Crear funcion de filtro de peliculas
function filtrarPeliculas(){
    const resultado=peliculas.filter(filtrarName).filter(filtrarGenero).filter(filtrarYear);
    
    if(resultado.length){
        mostrarHTML(resultado);
    }
    else{
        sinResultado();
    }

    //Cuando no hay opciones seleccionadas por el usuario
    // if(inputName.value=='' && inputGenre.value=='' && inputYear.value==''){
    //     sinResultado();
    // }else{
    //     mostrarHTML(resultado);
    //     boxPeliculas.parentElement.lastChild.remove();
    // }

    const hayContenido=Object.values(datosBusqueda).filter(e=>e);
    if(hayContenido.length){
        mostrarHTML(resultado);
    }else{
        sinResultado();
    }

}

//Crear funciones que va a recibir filter
function filtrarName(pelicula){
    const {nombre}=datosBusqueda;
    if(nombre){
        return pelicula.nombre==nombre;
    }
    return peliculas;
}

function filtrarGenero(pelicula){
    const {genero}=datosBusqueda;
    if(genero){
        return pelicula.genero==genero;
    }
    return peliculas;
}

function filtrarYear(peliculas){
    const {year}=datosBusqueda;
    if(year){
        return pelicula.year==year;
    }
    return peliculas;
}


//Fucion que limpie los cards de resultados anteriores.

function limpiarHTML(){
    boxPeliculas.innerHTML=''; //Remplaza todo por un string vacio
while(boxPeliculas.firstChild){ //Siempre que exista un primer elemento el while los va borrando
    boxPeliculas.firstChild.remove();
}


}

//Funcion cuando no se encuentran resultados
function sinResultado(){
    limpiarHTML();
    const sinResultado=document.createElement('div');
    sinResultado.classList.add('bg-danger', 'text-white', 'border', 'p-4', 'text-center');
    sinResultado.textContent='No hay resultados de busqueda';

    if(!boxPeliculas.parentElement.lastChild.classList.contains('bg-danger')){
        boxPeliculas.parentElement.appendChild(sinResultado);
    }
    
}