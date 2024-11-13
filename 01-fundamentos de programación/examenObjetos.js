/* 
instruccion 2

Crear un objeto llamado arsenalque contenga:

*Una propiedad armas que sea un array vacío.
*Un método agregarArma que recibe un arma como parametro y la agrega al array armas,
 
instrucción 5


*/

class arma{

    constructor (nombre, tipo, damage){

    this.nombre = nombre; //nombre del arma
    this.tipo = tipo; // tipo de arma (ej. "espada", "pistola", "arco"),
    this.damage = damage; //cantidad de daño que puede causar
    }
    describir(){
        console.log(`nombre:${this.nombre} tipo:${this.tipo} daño:${this.damage}`)
    }


}

let arsenal = {
    armas: [],
    agregarArma(arma){
        this.armas.push(arma);
       
        }
        

    }

let arma1 = new arma ("p-90", "subfusil", 15);
let arma2 = new arma ("AK-47", "fusil", 30);
let arma3 = new arma ("Desert Eagle", "pistola", 60);

arsenal.agregarArma(arma1);
arsenal.agregarArma(arma2);
arsenal.agregarArma(arma3);

/*console.log(arsenal.armas);
console.log(arma1);
console.log(arma2);
console.log(arma3);*/
for(let i = 0; i < arsenal.armas.length; i++){
    arsenal.armas[i].describir();
}