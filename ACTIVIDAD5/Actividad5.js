//Ejercicio1
let array1=[1, 3, 6, 10, 22, 55, 46, 2, 5, 0];
for(let i=0; i<=array1.length-1; i++){
    if(array1[i]>3){
        console.log(array1[i]);
    }
}

//Ejercicio2
let j=0;
let array2=[];
while(j<5){
    array2.push(prompt());
    j++;
}
console.log(array2);

//Ejercicio 3
let array3=array2.sort(function(a,b){return a-b});
for(let z=0; z<array3.length; z++){
    console.log(array3[z]);
}