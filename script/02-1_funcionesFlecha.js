// ------------------- Funciones de flechas (Arrow Functions) -------------------

//Las funcion de flecha (más conocidas como arrow function) nos permiten escribir una sintaxis de funcion más corta.
//Tiene la misma utilidad que una funcion anonima, podemos guardar en una variable una funcion de flecha y luego invocarla.

const funcionFlecha = () => {
    return 'Soy una funcion de flecha.';
};

const funcionAnonima = function(){ 
    return 'Soy una funcion anonima.';
};

console.log(funcionFlecha()) //Output -> Soy una funcion de flecha.
console.log(funcionAnonima()) //Output -> Soy una funcion anonima.

//Como se menciono antes, las funciones de flecha nos permiten hacer codigo más resumido.
//Si nosotros tenemos una funcion que contiene una linea de codigo que retorna un valor (como en el ejemplo anterior),
//podemos elminar las llaves y el return de la siguiente manera:

//NOTA: Esta caso solo funciona solo si tenemos una linea de sentencia (linea de codigo). Al final profundizamos mas sobre este tema.

const sinLlaves = () => 'Soy una funcion que devuelve un valor';

//Esto es equivalente a:

const ejemploUno = function(){
    return 'Soy una funcion que devuelve un valor';
}

function ejemploDos(){
    return 'Soy una funcion que devuelve un valor';
}

console.log(sinLlaves()) //Output -> Soy una funcion que devuelve un valor
console.log(ejemploUno()) //Output -> Soy una funcion que devuelve un valor
console.log(ejemploDos()) //Output -> Soy una funcion que devuelve un valor

//Ademas si nuestra funcion contiene un solo parametro, podemos NO utilizar los parentesis. 
//Es decir que no es obligatorio utilizar los parentesis en el caso de que nuestra funcion solo reciba un parametro:

const sinParentesis = nombre => `Hola ${nombre}, soy una funcion que recibre un parametro.`
const conParentesis = (nombre) => `Hola ${nombre}, soy una funcion que recibre un parametro.`

//En ambos casos, esto es equivalente a:

const ejemploTres = function(nombre){
    return `Hola ${nombre}, soy una funcion que recibre un parametro.`
}

function ejemploCuatro(nombre){
    return `Hola ${nombre}, soy una funcion que recibre un parametro.`
}

console.log(sinParentesis('Luxa')) //Output -> Hola Luxa, soy una funcion que recibre un parametro.
console.log(conParentesis('Paz')) //Output -> Hola Paz, soy una funcion que recibre un parametro.
console.log(ejemploTres('Agustin')) //Output -> Hola Agustin, soy una funcion que recibre un parametro.
console.log(ejemploCuatro('Francisco')) //Output -> Hola Francisco, soy una funcion que recibre un parametro.

//En los casos que es obligatorio utilizar los parentesis, es cuando nuestra funcion contiene NO contiene parametros, o contiene más de un parametro:

const sinParametros = () => 'Hola, soy una funcion que no recibe ningun parametro.'
const conParametros = (nombre,apellido) => `Hola ${nombre} ${apellido}, soy una funcion que recibe al menos, dos parametros.`

//En ambos casos, esto es equivalente a:

const ejemploCinco = function(){
    return 'Hola, soy una funcion que no recibe ningun parametro.'
}

function ejemploSeis (nombre,apellido){
    return `Hola ${nombre} ${apellido}, soy una funcion que recibe al menos, dos parametros.`
}

console.log(sinParametros()) //Output -> Hola, soy una funcion que no recibe ningun parametro.
console.log(conParametros('Juan','Paz')) //Output -> Hola Juan Paz, soy una funcion que recibe al menos, dos parametros.
console.log(ejemploTres()) //Output -> Hola, soy una funcion que no recibe ningun parametro.
console.log(ejemploCuatro('Juan','Paz')) //Output -> Hola Juan Paz, soy una funcion que recibe al menos, dos parametros.

//Para finalizar, en el primer ejemplo que vimos, estabamos utilizado las llaves para envolver nuestra linea de codigo:

    // Primer ejemplo:
    // const funcionFlecha = () => {
    //     return 'Soy una funcion de flecha.';
    // };

//Esto es lo que nos permiten las funciones de flecha, 
//nos otorgan mayor flexibilidad a la hora de escribir funciones o codigos que las otra funciones no nos permiten.
//Podemos escribir esta misma funcion, en una sola sentencia de esta forma, que la funcionalidad es la misma:

    //const funcionFlecha = () => 'Soy una funcion de flecha.';

//Pero al momento de escribir una funcion que requiere realizar otras sentencias (lineas de codigo),
//ahi si estamos obligados a utilizar las llaves para envolver nuestro codigo, y en el caso que esta funcion retorne un valor, utilizamos el return:

const funcionCompleja = () => {
    let nombre = 'Juan';
    let apellido = 'Paz';
    let mensaje = `Hola ${nombre} ${apellido}, soy una funcion con más de una sentencia (linea de codigo, no lo olvides). `
    let mensajeDos = 'Por eso ahora estoy encerrado entre llaves, y ahora si estamos obligados a utilizar el Return.'

    return mensaje + mensajeDos;
}

console.log(funcionCompleja()) // Output -> Hola Juan Paz, soy una funcion con más de una sentencia (linea de codigo, no lo olvides). Por eso ahora estoy encerrado entre llaves, y ahora si estamos obligados a usar Return.