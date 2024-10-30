/* 
practica Arreglos - Liga superheroes

*/

let heroes = ["Spider-Man","Batman","Superman","Kaliman"];



heroes.push("Daredevil");



heroes.shift();



heroes.splice(2,1,"Harley Queen");



heroes.sort();



let villanos = heroes.slice(1);

villanos.unshift("Joker");

console.log(villanos);

console.log(heroes);







