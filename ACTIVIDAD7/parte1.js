//Ejercicio 1
function searchWord(a,b){
    let palabra=a.indexOf(b);
    if (palabra >= 0){
        return true;
    }
    else{
        return false;
    }
}
searchWord("hola a todos", "todos");

//Ejercicio 2
const numbers=[1,2,3,4,10,11];

function sumaArreglos(arr){
    let suma = 0;
    for(let i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma;
}

sumaArreglos(numbers);

//Ejercicio 3
const word1="madam";

function palindromo(word){
    let newWord=word.split("");
    let reverseWord=newWord.reverse();
    let joinWord=reverseWord.join("");
    if(word==joinWord){
        return true;
    }
    else{
        return false;
    }
}
palindromo(word1);

//Ejercicio 4
function temperatura(c, f){
    let fahrenheit=(c*1.8)+32;
    let celcius=(f-32)*0.5556;
    console.log(`Temperatura de celcius a Fahrenheit: ${fahrenheit} y de Fahrenheit a Celcius: ${celcius}`);
}
temperatura(20, 90);