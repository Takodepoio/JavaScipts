/* 
Clases 

Una clase en JS es una plantilla para crear objetos.

Es una forma moderna y natural de trabajar con la progrmación orientada a objetos.

Loa nombres de las clases se recomiendan escribirlas con la primera letra en mayuscula;

Metodo constructor

Es un metodo especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase. 
Sintaxis básica

class NombreClase {
   //Método constructor

   constructor(par1, par2) {
      this.par1 = par1;
      this.par2 = par2;<
   }
}

Instancia de clases

Para crear un objeto usando la clase se una un objeto para crear la palabra "new" o nuevo.
eso invoca al consructor de la clase.

Sintaxis:

new NombreClase(par1, par2){

}

Esta instancia se asigna a una variable para tener donde guardarlas.

Metodos de clase
Se definen dentro de una clase y se signan automáticamente en el "prototipo" del objeto. Este la permite ue todas las instancias compartan el mismo método.
*/

//definir clase mascota

class Mascota{
  constructor(nombre,edad) {
    this.nombre = nombre; // propiedad nombre
    this.edad = edad; // propiedad edad
  }
  saludo(){
    console.log(`¡Hola me llamo ${this.nombre} y  tengo ${this.edad}
      años!`)
  }
}

//Instanciar la clase mascota. Creamos un objeto con la plantilla mascota.

let mascota1 = new Mascota("Julieta",3);
let mascota2 = new Mascota("KIWI",4);

console.log(mascota1.nombre);
console.log(mascota1.edad);
mascota1.saludo();
