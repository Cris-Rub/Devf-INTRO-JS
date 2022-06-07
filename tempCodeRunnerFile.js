
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

let x = getCredit(19, false);
x;