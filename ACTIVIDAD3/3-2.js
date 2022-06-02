//Ejercicio 3
var numero3=prompt("Ingresa un numero");
if(numero3%2==0){
    console.log(numero3 + " es divisible entre 2");
}
else{
    console.log(numero3 + " no es divisible entre 2");
}

//Ejercicio 4
var numero4=prompt("Ingresa un numero");
if(numero4%2==0){
    alert(numero4 + " es par");
}
else{
    alert(numero4 + " es impar");
}

//Ejercicio 5
var numero5=prompt("Ingresa un valor numerico cualquiera");
numero5==1000 ? (
    console.log("Ganaste un premio")
) : (
    console.log("Lo sentimos, sigue participando")
);

//Ejercicio 6
var numero6_1=prompt("Primer valor");
var numero6_2=prompt("Segundo valor");
if(numero6_1>numero6_2){
    console.log(numero6_1 + " es mayor que " + numero6_2);
}
else{
    console.log(numero6_2 + " es mayor que " + numero6_1)
}

//Ejercicio 7
var numero7_1=Number(prompt("Primer valor"));
var numero7_2=Number(prompt("Segundo valor"));
if(numero7_1==numero7_2){
    console.log("Ambos numeros son iguales");
}
else if(numero7_1>numero7_2){
    console.log(numero7_1 + " es mayor que " + numero7_2);
}
else{
    console.log(numero7_2 + " es mayor que " + numero7_1);
}
