// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

// Hoisting en variables declaradas con var
// Mira el siguiente código, ¿qué crees que sea el resultado del console.log?

console.log(nombre) // undefined
var nombre = "Andres" 

// La respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

// Lo que JavaScript está haciendo sería lo siguiente:
// Hoistin: Declara y asigna undefined

var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"
// Aquí el nombre de Hoisting o elevación.

// Hoisting en funciones
// Mira el siguiente código, ¿qué crees que sea el resultado del console.log?
console.log( saludar() )

function saludar() {
    return "Hola"
}
// La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
}
console.log( saludar() ) // "Hola"

// Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.


// Buenas prácticas
// El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se** recomienda declarar las variables y las funciones lo más arriba posible del código**, para evitar errores.

// También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.

// Llamar función antes de declararla.
hey();

function hey() {
    console.log("Hola " + miNombre); 
}
var miNombre = "Francisco";


// 
var miNombre = "Carusso";

hey2();

function hey2() {
    console.log("Hola " + miNombre); 
}




