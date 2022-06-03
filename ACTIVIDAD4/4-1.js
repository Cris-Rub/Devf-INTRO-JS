//Ejercicio 2
let mult=Number(prompt("Ingresa un numero"));
let i=1;
while(i<=mult){
    if(i%5==0){
        console.log(i);
    }
    i++;
}

//Ejercicio 3
let mult3=Number(prompt("Ingresa un numero"));
let j=1;
do{
    if(j%5==0){
        console.log(j);
    }
    j++;
}while(j<=mult3);



//Ejercicio 4
for(let z=0; z<=50; z++){
    if(z%2!=0){
        console.log(`Impar: ${z}`);
    }
}