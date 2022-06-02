//Ejercicio 1

var nombre=prompt("Ingresa tu nombre");
var edad=prompt("Ingresa tu edad");

if(edad >= 18){
    console.log("Puede ingresar a la discoteca");
    if(nombre == 'Mario' || nombre == 'Carlos'){
        console.log("Puede ingresar a sala VIP");
    }
}
else{
    console.log("No puede ingresar a la discoteca");
}

//Ejercicio 2

alert("Vamos a jugar piedra, papel o tijera");
alert("Por favor solo ingresa un dato por jugador: 'piedra', 'papel' o 'tijera'");
var jugador1=prompt("Turno jugador 1");
var jugador2=prompt("Turno jugador 2");

if(jugador1=='papel' && jugador2=='piedra'){
    console.log("Papel vence piedra!");
    console.log("El ganador es el jugador 1");
}
else if(jugador1=='piedra' && jugador2=='tijera'){
    console.log("Piedra vence tijeras!");
    console.log("El ganador es el jugador 1");
}
else if(jugador1=='tijera' && jugador2=='papel'){
    console.log("Tijeras vence papel!")
    console.log("El ganador es el jugador 1");
}
else if(jugador2=='papel' && jugador1=='piedra'){
    console.log("Papel vence piedra!");
    console.log("El ganador es el jugador 2");
}
else if(jugador2=='piedra' && jugador1=='tijera'){
    console.log("Piedra vence tijeras!");
    console.log("El ganador es el jugador 2");
}
else if(jugador2=='tijera' && jugador1=='papel'){
    console.log("Tijeras vence papel!")
    console.log("El ganador es el jugador 2");
}
else{
    console.log("Error: asegurate de ingresar correctamente los valores")
}