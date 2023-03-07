// La estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

// Cómo utilizar el condicional switch: Colocamos la palabra reservada switch y seguido de la variable o expresión a evaluar, pero sin ningún operador de comparación.

// Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada break para que no vuelva a evaluar otra condición si ya se cumplió.

// Finalmente, colocamos la condición por defecto con la palabra reservada default que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque else.

let expresion = 1;

switch (expresion) {
    case 1: {
        console.log('case: 1'); // Bloque 1
        break;
    }
    case 2: {
        console.log('case: 2'); // Bloque 2
        break;
    }
    default: {
        console.log('default: cualquier valor que no sea 1 o 2');// Bloque por defecto
    }  
}

// Esto se leería de la siguiente manera: evalúa (switch) la variable expresion, en el caso de que sea igual a uno (case 1), entonces ejecuta el bloque 1 y termina (break), en el caso de que sea igual a dos (case 2), entonces ejecuta el bloque 2 y termina (break), si no se cumple ninguna, ejecuta un bloque por defecto (default).

// Ejemplo utilizando switch: Por ejemplo, creemos un semáforo.

let verde = "verde";
let amarillo = "amarillo";
let rojo = "rojo";

function semaforo(color) {
    switch (color) {
        case "verde": {
        return "🟢 ¡Sigue!";
        break
        }
        case "amarillo": {
        return "🟡 ¡Detente!";
        break
        }
        case "rojo": {
        return "🔴 ¡No puedes avanzar!";
        break
        }
        default: {
        console.log("🤔 ¡No reconozco ese color!");
        return "🤔 ¡No reconozco ese color!";
        }
    }
}

console.log( semaforo(verde)    );
console.log( semaforo(amarillo) );
console.log( semaforo(rojo)     );
console.log( semaforo()         );

// Cuándo utilizar switch: Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.

// Ejercicio de condicionales: Cambia tu juego de piedra, papel o tijera realizado con condicionales if a la estructura switch. ¿Qué diferencias observaste? ¡Comparte tu trabajo en la sección de aportes!

// Resolución: Divido el programa en tres funciones. El juego() donde se ingresa la opción del jugador (papel, tijera o piedra). Otra función para el proceso del resultado y una ultima función para seleccionar el icono corespondiente.

// El proceso se gestiona de la siguiente manera: En la entrada del switch tiene que ingresar un true.
// Por eso si se cumple uno de los tres casos sera true.
// Si user y la IA son iguales es un empate.
// Si el usuario selecciona:
//  user   |  IA    |  Gana el User. caso contrario gana la IA
// -----------------|
//  papel  | piedra | 
//  tijera | papel  |
//  piedra | tijera |

let papel  = 1;
let tijera = 2;
let piedra = 3;
let IA = Math.floor(Math.random() * 3);

function juego(user){
    let resultado;
    Number(IA);
    Number(user);

    resultado = proceso(user);
    user = icon(user);
    IA = icon(IA);
    
    return `Tú:${user} la IA:${IA} = ${resultado}`;
}

function proceso(user){
    switch (user===1 || user===2 || user===3) {

        case (user===1 && IA===3) || (user===2 && IA===1) || (user===3 && IA===2):
            return "🥳 Ganaste!";
            break;
        
        case (user === IA || IA === user):
            return '🤝🏼 Empate';
            break;    
        
        default:
            return '😵 Perdiste!';
            break;   
    }
}

function icon(cambio){
    switch (cambio) {
        case 1: return "📋";
            break;
            
        case 2: return "✂";
            break;

        case 3: return "🥌";
            break;

        default: return "❌";
        break;
    }
}

console.log(juego(papel));


// En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

// Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
// Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
// Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
// Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".

// Hola, en este caso no es necesario usar el break después del return, ya que es código inaccesible, ya que la ejecución de la función finaliza cuando retornas el valor deseado.

function solution(article) {
    switch (article) {
        case 'computadora': return 'Con mi computadora puedo programar usando JavaScript';
        case 'celular'    : return 'En mi celular puedo aprender usando la app de Platzi';
        case 'cable'      : return '¡Hay un cable en mi bota!';
        default           : return "Artículo no encontrado";
    }
}

console.log( solution('computadora')  );
console.log( solution('celular')      );
console.log( solution('cable')        );
console.log( solution('ornitorrinco') );