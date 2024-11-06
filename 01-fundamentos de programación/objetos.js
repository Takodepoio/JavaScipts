//objetos
/*
Son conjunto de propiedades y metodos.

Las propiedades describen las caracteristicas del objeto-

Los métodos describen los comportamientos del objeto.

Los objetos pueden contener distintos tipos de datos:
Strings, numbers, arrays, booleans,"undefained". otros objetos e incluso funciones.

Sintaxis
let nombreObjeto = {
    propiedad1 : "datoString",
    propiedad2 : "datoStrin",
    propiedad3: dato

};

Ejemplo
let pc = {
    procesador : "Intel core i9 de 12ba gen. 12k",
    tarjetaGrafica : "3060 tuf de 12 gb de ram",
    valoresCalculados: 4

};
así se asigna un propiedad como valor a una variable.

let procesador = pc.procesador; //forma 1 de llamarlos
let tarjetaGrafica = pc["tarjetaGrafica"]; //forma 2 de llamarlos
let valoresCalculados = pc["valoresCalculados"];
alert(procesador);

las propiedades de un objeto se separan por comas ","

*/

let personaje = {

    nombre: "Frodo Bolsón",
    edad: "24",
    poderes: false,
    residencia: "La comarca",
    humanHabilities: ["valor", "determincación", "compañerismo"],
    //forma 2
    "Comida Favorita": "Espagetti",

}
console.log(personaje.nombre);
console.log(personaje["Comida Favorita"]);

/* agregar y borrar propiedades de objetos */

personaje.enemigos = ["Gollum", "Sauron", "Gandalf"] ;
console.log(personaje.enemigos);

console.log(personaje);

let Julieta = {
    nombre: "Julieta",
    tipo: "Yorki",
    edad: 10,
    //objeto añadido
    fisico : {
        estatura: 30,
        peso: 12,
        color: "canasta Basica"
    },
    //declaramos un metodo
    saludo : function(masta){
        //Codgo que se ejecua al invocr la función
        alert(`¡WAWAS MALDITO AMLOVER! me llamo ${this.nombre} y soy la más perrua aquí y mi amo es ${masta}`);
    }
}
console.log(Julieta.fisico.estatura);
console.log(Julieta.fisico.peso);
console.log(Julieta.fisico.color);
Julieta.fisico.colorOjos = "rojos";
console.log(Julieta.fisico.colorOjos);
delete Julieta.fisico.color;
console.log(Julieta.fisico);

Julieta.saludo("Toño");
/* 
Un metodo es una función que se define como propiedad de un objeto.

sintaxis

nombreClave :function(parametros){
//Código que se ejecuta
}

This es una palabra reservada que se refiere alobjeto actual
*/