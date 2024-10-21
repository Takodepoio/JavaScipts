/* 
Los arrays o arreglos se pueden definir como unos cajones que contienen un dato y estan organizados por indices.

Se representan de la siguiente manera.

let videojuegos = ["AC", "cyberpunk", "GTAV", "COD"];

otra forma de declarar

let videojuegos = new Array("AC", "cyberpunk", "The Witcher", "GTAV");

comprobamos
*/

//let videojuegos = ["AC", "cyberpunk", "GTAV", "COD"];

//la segunda opcion tiene que tener la A de Array en mayuscula si no no funciona al parecer
let videojuegos = new Array("AC", "cyberpunk", "The Witcher", "GTAV");

let arrayBooleano = [true, false, true, true, false];

let ArrayCeption = [[2,4,6], ["queso", "tortilla", "salsa"], [true, false, true]];

//se puede usar la funcion lenght para obtener el numero de datos en un array medidios por el indice. 
console.log(ArrayCeption[0].length + ArrayCeption[1].length + ArrayCeption[2].length);

/* 
tambien se pueden agregar la final elementos o mas indices en el Array con la funcion push. Ejemplo

videojuegos.push("Fall Guys"); 

let videojuegos = new Array("AC", "cyberpunk", "The Witcher", "GTAV", "Fall Guys");

Tambien puedes quitar el ultimo con la funcion pop

videojuegos.pop();

El unshift agrega elementos al inicio . se estructura de la siguiente manera

nombreArray.unshift("valorArreglo");

EL push sirve para agregar uno al final y se escribe de la misma manera.

nombreArray.push(valorArray);

shift es la funcion que quita un espacio del indice al inicio.

nombreArray.shift();

con la funcion lenght podemos obtener en valor numero equivalente a la cantidad de valores ocupando un espacio dentro del array.







*/

//probemos

videojuegos.push("Fall Guys");

alert(videojuegos[4]);

//indexOf este valor nos dice cual es el numero de indice en donde se encuentra un valor.

/* let indice = videojuegos.indexOf("Fall Guys");

console.log(indice); */

// El splice nos sirve para agregar mas valores con su propio espacio al array segun la porcion que escojamos del mismo.
console.log(videojuegos);

videojuegos.splice(4,0,"Red Dead Redemption", "Valorant");

console.log(videojuegos);










/* 

sort() - Ordena los elementos de un array de mayor a menor alfabeticamente.

nombreArray.sort(); - 


*/





