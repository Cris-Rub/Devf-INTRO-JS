/**
 * Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 * y regresa como resultado, sus respectivas edades y la diferencia de edad. 
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];



  /**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */

 const numbers = [ 1, -4, 12, 0, -3, 29, -150];
 let suma=0;
 function sumaPositivos(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            suma+=arr[i];
        }
    }
    return suma; 
 }
 sumaPositivos(numbers);



 /*
 *
 * Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
 
   Ejemplo
 
   La matriz es la lista original. Los números que faltan son
 
   matriz = [7,2,5,3,5,3]
 
   br = [7,2,5,4,6,3,5,3]
 
 Los números que faltan en arr son [4,6]
 */

 matriz = [7,2,5,3,5,3];
 
 br = [7,2,5,4,6,7,3,5,3];

 function findMatrix(m1, m2){
     let i=0;
     let cont=i;
     let result=[];
    for(i;i<m2.length;i++){
        if(m2[i]!=m1[i-cont]){
            result.push(m2[i]);
            cont++;
        }
    }
    return result;
 }
 console.log(findMatrix(matriz,br));

 /**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

    const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];

    function count(arr){
        let result=[];
        for(const num of arr){
            result[num]=result[num]+1 || 1;
        }
        return result
    }
    console.log(count(arr));


 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */

const a = [1,2,3];
const b = ['a','b','c'];

function combineArray(arr1, arr2){
  let result=[];
  for(let i=0; i<arr1.length; i++){
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  return result;
}
console.log(combineArray(a,b));

