//Sugiero activar Word wrap Los condicionales son estructuras que permiten ejecutar diferentes bloques de codigo en funcion de si una condicion (expresion) es verdadera o falsa.

// Estas estructuras controlan el flujo de los programas;

/* 
Estructuras del condicional

1. if (si)

El bloque se ejecuta si a condicion del if es verdadera si es falsa el el codigo dentro del if se omite per si pones un else se ejecuta ese el.

2. else (otra cosa o ademas)

Es el codigo que se va a ejecturar si no se cumple la primera condicion y resulta en un falso.

3. else if 
La neta solo es otro condicional agregado se le puede poner un 'else' cuando ya se ba a acabar en bloque condicional no hay tanto problema 

*/
// bloque if
let number = 4;

if(number > 5){
    console.log('me ejecute porque al programador malo se e ocurrio ponerme un valor verdadero sin siquiera ponerme una condicional que le pasa esta loco')
} else if (number >= 4){
    console.log('me ejecute porque al programador malo se e ocurrio ponerme un valor falso en la primera condicion pero verdadero en la segunda sin siquiera ponerme una condicional que le pasa esta loco')
} else {
        console.log('ya me hiciste enojar, como te atreves a agregarme una condicional sin ser condicion y ponerme las dos condicionales falsas')
}
