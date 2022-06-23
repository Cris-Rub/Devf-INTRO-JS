//Variables

const titulo=document.querySelector('#paragraph');
const pantalla=document.querySelector('#bigImage');
const contMiniaturas=document.querySelector('#imgsContainer');

contMiniaturas.addEventListener('click', (e)=>{
    if(e.target.src){
        pantalla.src=e.target.src;
        titulo.textContent=e.target.name;    
    }  
})