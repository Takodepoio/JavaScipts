/* 
Operadores

Son smbolos utilizados para realizar operaciones sobre valores y variables.

1. Aritmeticos
2. Asignación
3. Comparación

*/

/* 
operadores aritméticos

Se utilizan para realizar cálculos matemáticos.

sumar +
restar -
multiplicar * 
dividir /

*/
/* let x = prompt("dame un valor");
let y = prompt("dame un valor"); */

/* let sumar = x + y ;
alert(sumar); */

/* resta */
/* let resta = x - y ;
alert(resta); */

/* multiplicación */
/* let multiplicacion = x / y ;
alert(multiplicacion); */

//división

/* let divicion = x / y ;
alert(divicion); */

// módulo (%): Devuelve el resto de la división de los valores.

let mod = 7 % 2; // 1
console.log(mod);

//Exponenciacion (**) : Eleva un numero a la potencia del otro.
let expo = 5 ** 3; //
console.log(expo); 

// Incremento (++): Incremento el valor en uno
let z = 2;
z++;
console.log(z);

// decremento (--): decrese el valor en uno
let t = 2;
t--;
console.log(t);
// operadors de asigncion (=): Asigna a una variable.

let w = 45;
//asignacion con suma (+=): uma el valor a una variable y la asigna
w += 5 // va a valer 50
console.log (w);
//asignacion con resta (-=) resta el valor a una variable y la reasigna.

w -= 23; // es igual a 27
console.log(w);

//asignacion con multiplicacion
w *= 10;
console.log(w);
//asignacion con division
w /= 2;
console.log(w);
/* 
Comparacion
Estos operadores comparan dos valores y devuelven 'true' or 'false'.
*/
//Igualdad (==); compara dos valores para ver si son iguales. Nota: Sin tener en cuenta el tipo.

let valor = "5";

let compare = 5 == valor;

console.log (compare); //true

// igualdad estricta (===). Compara dos valores y su tipo, para ver si son exactamente iguales incluyendo el tipo de datos.

compare = 5 === valor;

console.log (compare); //false

//desigual se representa con (!=) y sirve para saber si algo es desigual con valores de true or false

let value = "4";

let comparacion = 4 != value;

console.log (comparacion);

//exactamente desigual se repreenta con (!==) y es para saber si son desiguales incluso en el tipo de dato

comparacion = 4 !== value;
 console.log (comparacion);
 //mayor que (>)

 comparacion = 4 > value;
 console.log (comparacion);

 //mayor o igual a (>=)

 comparacion = 4 >= value;
 console.log (comparacion);

 //menor que (<)
 comparacion = 4 < value;
 console.log (comparacion);
 //meno o iual a (<=)
 comparacion = 4 <= value;
 console.log (comparacion);

