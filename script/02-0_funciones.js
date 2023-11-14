// Reto
function solution(valor) {
    let tipo = typeof (valor);
    return tipo;
}

console.log( solution(32) );
console.log( solution('Pedro') );
console.log( solution(true) );

// ------------------- Funciones Declarativas -------------------

/*  Una function que va a inicializar un espacio en la memoria (miFuncion)
    y va a guardar un valor (return 3)*/

// Llamar función Declarativas antes de declarar ya que se le aplica hoisting.
// El hoisting se le aplica a function.
console.log( miFuncion() );

function miFuncion() {
    return 3;
}

// ------------------- Funciones de Expresión (Anonimas) -------------------

//Generamos una variable que va a guardar una function.
// Parametros: (a,b)

let miFuncion = function(a,b) {
    return a + b;
}
// Llamar función de expresión, después de declarar, no se le aplica hoisting. 
miFuncion();

// ------------------------- Ejemplos -------------------------
function saludarEstudiantes (estudiante) {
    console.log(estudiante);
}

// console.log(`Hola ${estudiante}`);
// saludarEstudiantes('Francisco Carusso');

// --------------------------------------------------------------
function sumar(a,b) {
    let resultado = a + b;
    return resultado;
}

console.log( sumar(2,4) );