/* 
Hay varios tipos de ciclos.

for 
Este se utiliza cuando vas a usar un ciclo y conoces sulimite. Se usa con contadores.
while
El ciclo se aplica mientras la condicion sea verdadera.
do while
Es similar a while pero garantiza que el bloque de código se ejecute almenos una vez.
Primero ejecuta el codigo y luego verifica la condicion
for in
Se usa para recorrer las propiedades enumerables de un objeto.
for of
Se usa para recorrer objetos iterables (arrays, strings, mapas, conjuntos, etc.).
*/
//C[odigo guarda nombres for]
/*let personas = prompt("cuantas personas son?");
personas = Number(personas);
var nombres = [];
for(let c = 1; c <= personas  ; c++){
    
    nombres.push(prompt("dame los nombres de esas personas"));
    console.log(nombres);

}
alert(nombres);*/
/* la variable se define fuera del ciclo
   let nombreVariable = valor;
   while(condicion){
   codigo a ejecutar

   nombreVariable==//Actualizacion
   }
*/
//ciclo while (condicion){codigo a ejecutar}
let contador = 0; //Definicion

while (contador != 20){
    console.log("pollite chiken " + contador );

    contador++;

}

let veces = 5;

while (veces > 2){

    console.log("Veces: "+ veces);
    veces--;
}



let numero = 6;

do{
    //codigo que se ejecuta almenos una vez

    console.log("el numero es: "+ numero);
    numero--;
}while(numero<6 && numero>=0);