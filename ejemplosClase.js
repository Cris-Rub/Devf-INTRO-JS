//Declración de función

/*
*Ser mayor  de 18 años: edad
*Situación financiera (adeudo): true/false
*Return: Imprimir si puedo tener crédito o no.
*/

function getCredit(age, debt){ //Declaración convencional
    if(age>=18){
        if(debt){
            return "No puedes tener el credito";
        }
        else{
            return "Puedes obtener el credito";
        }
    }
}

let c = getCredit(19, false);
console.log(x);


//Arrow function
const getCredit = (age, debt) =>{
    if(age>=18){
        if(debt){
            return "No puedes tener el credito";
        }
        else{
            return "Puedes obtener el credito";
        }
    }
}

//SCOPE

let x = 10;

function getNumber(num){
    let y = 20;
    if(num>1){
        num += y;
        console.log(num);
    }
    var z=30;

    console.log(x+y+z);
}
console.log(x+y);
console.log(x+z);
