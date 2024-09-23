// En este código vamos a ver los tipos de datos utilizables en el código
/* 
Tipos de datos

los tipos de datos se dividen en primitivos y complejos.

1. Tipos de datos primitivos

Datos basicos que no se consideran "objetos" y no tienen "métodos"

number o número

representación de valores ya sea enteros o con decimales
(punto flotante)

Tambien hay valores boolianos que son los de verdadero o falso se utilizan para los condicionantes

ademas

Existen las cadenas de caracteres con el formato String y se usa para representar tecto se usa con comillas dobles o simples mientras que seas consistente con el uso de ese signo ("") o ''

Puedes tener variables definidas cuando son inicializadas o indefinidas cuando no han sido inicializadas

Array o arreglos

son un conjunto de datos que los almacena en una lista ordenada de elementos.
los datos dentro de los arreglos se escriben entre corchetes. [] y separados por comas , 

Este tipo de dato es un dato complejo o de objeto.

*object
Es un conjunto de multiples datos en pares 'clave'-'valor'. Se escriben entre llaves {} y separados por comas.

*funciones o functions

Es un tipo de dato que puede ser 'invocado'. Se declaran con la palabra reservada "function". y el código que ejecutan entre llave {"código"}

*/
let miNumero = 4;
let miNumeroDecimal= 4.444;

/* console.log(miNumero);
console.log(miNumeroDecimal); */

let miTexto = "Antonio";

/* console.log(miTexto); */

let miVerdad = true ;
let miMentira = false;

/* console.log(miVerdad);
console.log(miMentira);
 */

let x;

/* x = prompt("cual es tu numero favorito");
 */
/* console.log(x);
alert(x);
 */

let arreglito = ['manzana','pera','uva','mole'];

console.log(arreglito [0]);

/* object objeto */

let persona = {

  /* clave : valor */
  nombre : "Antonio",
  edad: 20,
  colorDePiel: "medio cafe media taza de leche con toque de rosa",
  altura: 1.88,
  peso: undefined,
  vivo: true,
  novia : false,
}

console.log(persona);
//accedemos a los datos de una clabe dentro de un objeto
//con la anotación de punto .

/* function */

let mensajito = function () {
  // pasamos el código que ejecuta la funcion
  console.log("Este es un mensaje lanzado por una funcion")
}
//invocamos la función
mensajito();