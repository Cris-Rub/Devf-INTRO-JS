var x;
var y;
var metodo;

let resultado=document.getElementById('resultado');
let uno=document.getElementById('uno');
let dos=document.getElementById('dos');
let tres=document.getElementById('tres');
let cuatro=document.getElementById('cuatro');
let cinco=document.getElementById('cinco');
let seis=document.getElementById('seis');
let siete=document.getElementById('siete');
let ocho=document.getElementById('ocho');
let nueve=document.getElementById('nueve');
let cero=document.getElementById('cero');
let multiplicacion=document.getElementById('multiplicacion');
let menos=document.getElementById('menos');
let mas=document.getElementById('mas');
let igual=document.getElementById('igual');
let limpiar=document.getElementById('limpiar');
let division=document.getElementById('division');

uno.onclick=function(){
    resultado.textContent=resultado.textContent + "1";
}
dos.onclick=function(){
    resultado.textContent=resultado.textContent + "2";
}
tres.onclick=function(){
    resultado.textContent=resultado.textContent + "3";
}
cuatro.onclick=function(){
    resultado.textContent=resultado.textContent + "4";
}
cinco.onclick=function(){
    resultado.textContent=resultado.textContent + "5";
}
seis.onclick=function(){
    resultado.textContent=resultado.textContent + "6";
}
siete.onclick=function(){
    resultado.textContent=resultado.textContent + "7";
}
ocho.onclick=function(){
    resultado.textContent=resultado.textContent + "8";
}
nueve.onclick=function(){
    resultado.textContent=resultado.textContent + "9";
}
cero.onclick=function(){
    resultado.textContent=resultado.textContent + "0";
}
 //FUNCIONES: clear, resolver, reset
 function clear(){
    resultado.textContent="";
    // x=0;
    // y=0;
    // metodo="";
}

function reset(){
    y=0;
    x=0;
    metodo="";
    clear();
}

function resolver(){
    let result=0;
    switch(metodo){
        case "+":
            result=parseFloat(x)+parseFloat(y); //Parsea string a flotante
            break;
        case "-":
            result= parseFloat(x)-parseFloat(y);
            break;
        case"*":
            result= parseFloat(x)*parseFloat(y);
            break;
        case"/":
            result= parseFloat(x)/parseFloat(y);
            break;
    }
    resultado.textContent=result;
}

//Funcion de cada botón
 
mas.onclick=function(){
    x=resultado.textContent;
    metodo="+";
    clear();
}
menos.onclick=function(){
    x=resultado.textContent;
    metodo="-";
    clear();
}
multiplicacion.onclick=function(){
    x=resultado.textContent;
    metodo="*";
    clear();
}
division.onclick=function(){
    x=resultado.textContent;
    metodo="/";
    clear();
}
igual.onclick=function(){
    y=resultado.textContent;
    resolver();
}
limpiar.onclick=function(){
    reset();
}

