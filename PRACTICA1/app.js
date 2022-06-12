//Funcionalidad a botones
//Reflejar resultado en pantalla

//Guarda el valor del contador
let count=0;

//Traer elemento span para reflejar contador
let value=document.getElementById('contador');

//Crear eventos: incrementar y decrementar
function incrementar(){
    count++;
    value.textContent=count;
}

function decrementar(){
    count--;
    if(count<0){
        value.textContent=0;
        count=0;
    }
    else{
        value.textContent=count;     
    }
    
}


