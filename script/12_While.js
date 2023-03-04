// Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

// Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

// Cómo utilizar el ciclo while
// La estructura del ciclo while es la siguiente:

// while (condición) {
//     // Bloque de código
//     // Cambiar la condición para salir del bucle
// }
// En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

// Generación de números con el bucle while
// Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.

// La estructura es la siguiente:

var numero = 1;

while ( numero <= 10 ){
    console.log(numero);
    numero++;
}

// Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.

// Control de variables con el bucle while
// Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.

// Ejecuta el siguiente código en la terminal de tu navegador, e intenta ingresar un valor incorrecto y observa lo que sucede. Se utiliza la condición contraria a lo que queremos, porque es lo que controlaremos, al cambiar la variable edad evitamos el ciclo infinito.

// Ej:
// var edad = Number(prompt("Ingrese un valor: "));

// while (edad > 18 || edad <= 0){
//     edad = Number(prompt("Ingrese un valor: "));
// }
// console.log("Gracias por ingresar al programa");


// Ej:
var estudiantes = ['Maria', 'Sergio', 'Rosa'];

function saludar(estudiantes) {
    console.log(`Hola, ${estudiantes}!`);
}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

/*
    En este desafío tu función solution recibirá 3 parámetros:

    estudiantes: un array de strings con varios nombres de estudiantes.
    deathCount: un número entero.
    nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
    Tu función debe retornar un array de elementos con las siguientes indicaciones:

    Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

    Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

    💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

    Ejemplo 1:

    El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

    // Input
    solution(["Nico", "Zule"], 0, "Santi")

    // Output
    ["Nico", "Zule", "Santi"]

    Ejemplo 2:

    El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

    // Input
    solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

    // Output
    ["Juan", "Juanita", "Julian"]

    Ejemplo 3:

    El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

    // Input
    solution(["Nath", "Luisa", "Noru"], 2, "Cami")

    // Output
    ["Nath", "Cami"]
*/

function solution(estudiantes, deathCount, nuevo) {
    let array = [estudiantes, deathCount, nuevo];

    if (array[1] === 0) {

        array[0].push(nuevo);
        return `${array[0]}`;
    }

    else if (array[1] > 0 ) {

        for(let i = 0; i < array[1]; i++) {
            array[0].pop();
        }

        array[0].push(nuevo);
        return `${array[0]}`;
    }
    else {
        return 'Ingrese un número igual o mayo a cero en deathCount';
    }
}

console.log(solution(["Nico", "Zule"], 0, "Santi"));
console.log(solution(["Nico", "Zule", "hhhh"], 1, "martin"));
console.log(solution(["Nico", "Zule", "hh"], 2, "pablo"));


console.log(solution(["Nico", "Zule", "hh"], 'H', "pablo"));
console.log(solution(["Nico", "Zule", "hh"], -1, "pablo") );
