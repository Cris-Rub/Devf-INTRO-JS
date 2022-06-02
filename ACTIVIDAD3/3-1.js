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