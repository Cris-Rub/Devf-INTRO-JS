//Capturar variables
const btnInicio=document.querySelector('#inicio');
const player1=document.querySelector('#jugador1');
const player2=document.querySelector('#jugador2');
const player3=document.querySelector('#jugador3');

let pos1=0;
let pos2=0;
let pos3=0;

// function iniciarJuego(){
// }
//Funciones
btnInicio.addEventListener('click', () =>{
    btnInicio.style.display='none';
    let intervalo=setInterval(carrera, 130);
    function carrera(){
        pos1+=Math.round(Math.random()*20);
        player1.style.left=pos1+'px'; //100px
        pos2+=Math.round(Math.random()*20);;
        player1.style.left=pos2+'px'; //100px
        pos3+=Math.round(Math.random()*20);;
        player1.style.left=pos3+'px'; //100px
        
        if(pos1>=650){
            console.log('Ganó rojito');
            clearInterval(intervalo);
        }else if(pos2>=650){
            console.log('Gana azul');
            clearInterval(intervalo);
        }else if(pos3>=650){
            console.log('Gano amarillo');
            clearInterval(intervalo);
        }

    }
});

//Reto: Añadir boton de reinicio y añadir mensaje con el jugador ganador


