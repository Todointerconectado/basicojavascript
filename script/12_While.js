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