//Variables

const formAnadir=document.querySelector('#form-anadir');
const inputToDo=document.querySelector('#inputToDo');
const boxTareas=document.querySelector('#box-tareas');

//objeto que guarde seleccion del usuario
const datosTarea={
    toDo:''
}

//evento para mostrar informacion al cargar la pagina
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarHTML()
})