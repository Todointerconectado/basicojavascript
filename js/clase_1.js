// --------------------------------------------------
// Tipos de variables:
var variableVar; // Menos recomendable
let variablesLet; // Recomendable
let variableName;

// Tras declarar una variable, puedes asignarle un valor:
variableName = 'bob';

// Puedes hacer las dos cosas en la misma línea si lo necesitas:
let variableName2 = 'Piter';

variableName;
variableName2;

// Después de haberle dado un valor a la variable, puedes volver a cambiarlo:

variableName = 'Juan';
variableName2 = 'Pedro';

variableName;
variableName2;

// Advierte que las variables tienen distintos tipos de datos:

// Esto es una secuencia de texto conocida como cadena. Para indicar que la variable es una cadena, debes escribirlo entre comillas
let variableString = 'Bob';

// Esto es un número. Los números no tienen comillas.
let variableNimber = 10;

// Tienen valor verdadero/falso. true/false son palabras especiales en JS, y no necesitan comillas.
let variableBoolean = true;

// Una estructura que te permite almacenar varios valores en una sola referencia.
let variableArray = [1, 'Erick', 'Tom', 10];

// Llama a cada miembro del array empezando de la posición cero así: 
variableArray
console.log( variableArray[0] );
console.log( variableArray[1] );
console.log( variableArray[2] );
console.log( variableArray[3] );

// Básicamente cualquier cosa. Todo en JavaScript es un objeto y puede ser almacenado en una variable. Mantén esto en mente mientras aprendes: 
// let variableObjet = document.querySelector('h1');
// Todos los ejemplos anteriores también.



// --------------------------------------------------
// Operadores:

// Suma/concatenar: Se usa para sumar dos números, o juntar dos cadenas en una. Símbolo(s): +
console.log( 6 + 9 );
console.log( '6' + '_' + '9' );
console.log( 'hola' + ' ' + 'mundo!' );

// Resta, multiplicación, división:
// Estos hacen lo que esperarías que hicieran en las matemáticas básicas. Símbolo(s): -, *, /
console.log( 9 - 3 );
console.log( 8 * 2 );
console.log( 20 / 2 );

// Operador de asignación:
// Los has visto anteriormente: asigna un valor a una variable. Símbolo(s): =

let asignarValor = 'Igual';

// identidad/igualdad
// Comprueba si dos valores son iguales entre sí, y devuelve un valor de true/false (booleano). Símbolo(s): ===
let miVariable = 3;
miVariable === 4;

// Negación, distinto (no igual)
// En ocasiones utilizado con el operador de identidad, la negación es en JS el equivalente al operador lógico NOT — cambia true por false y viceversa. Símbolo(s): !, !==

// La expresión básica es true, pero la comparación devuelve false porque lo hemos negado:
let variableTrue = 3;
!variableTrue === 3;

// Compara los valores sin importar el tipo de variable
if (3 == '3') {
    console.log('true');
}
else{
    console.log('false');
}

// compara el valor biendo el tipo de variable.
if (3 === '3') {
    console.log('true');
}
else{
    console.log('false');
}

// Aquí estamos comprobando "miVariable NO es igual a 3". Esto devuelve false, porque miVariable ES igual a 3.
let variableTrue2 = 3;
variableTrue2 !== 3;



// --------------------------------------------------
// Condicionales:

// Las condicionales son estructuras de código que permiten comprobar si una expresión devuelve true o no, y después ejecuta un código diferente dependiendo del resultado. La forma de condicional más común es la llamada if... else. Entonces, por ejemplo:

let helado = 'chocolate';
helado;

if (helado === 'chocolate') {
    console.log('¡Sí, amo el helado de chocolate!');
}
else {
    console.log('Awww, pero mi favorito es el de chocolate...');
}


// --------------------------------------------------
// Funciones:

// Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo: 

// let nombreDeLaVariable = document.querySelector('h1');
// alert('Hola!');

// Ejemplo de función para multiplicar:
function multiplicacion (num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

// Llamar a la función multiplicar
console.log( multiplicacion (2, 3) );
console.log( multiplicacion (4, 7) );
console.log( multiplicacion (2, 3) );



// --------------------------------------------------
// Eventos:

// Para crear una interacción real en tu sitio web, debes usar eventos. Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código. El ejemplo más obvio es un clic (click event), que se activa al hacer clic sobre algo. Para demostrar esto, prueba ingresando lo siguiente en tu consola, luego da clic sobre la página actual:

// document.querySelector('html').onclick = function() {
//     alert('¡Ouch! ¡Deja de pincharme!');
// }

// Hay muchas maneras de enlazar un evento a un elemento; aquí hemos seleccionado el elemento <html> y le asignamos a su propiedad onclick una función anónima (función sin nombre) que contiene el código que se ejecutará cuando el evento suceda.

// NOTA que: 
// document.querySelector('html').onclick = function() {};
// es equivalente a:
// let miHTML = document.querySelector('html');
// miHTML.onclick = function() {};


// --------------------------------------------------
// Sobrecargar tu sitio web de ejemplo:

// Guardo la etiqueta <img> en una variable llamada miImage.
let miImage = document.querySelector('img');

// Le doy el evento onclick a la variavle miImagen e igualo a la función cambiarImage. 
miImage.onclick = cambiarImage;

function cambiarImage () {
    // Creo una variable y guardo el atributo 'src'
    let miSrc = miImage.getAttribute('src');

    // pregunto si el atributo guardado en miSrc es igual a la ruta por defecto impuesta.
    if (miSrc === 'images/firefox.png') {
        // Si es true se cambia por la segunda imagen
        miImage.setAttribute('src', 'css/images/firefox2.png');
    }
    else {
        // Si es false se cambia por la imagen por defecto.
        miImage.setAttribute('src', 'css/images/firefox.png');
    }
}


// --------------------------------------------------
// Añadir un msj de bienvenida personalizado

// sto toma referencia al nuevo botón que se agregó y al título y los almacena en variables:
let miBoton = document.querySelector('button');
let tituloPersonalizado = document.querySelector('h1');

function estableceNameUser () {
    let miNombre = prompt('Por favor, ingresar tu nombre:');

    if(!miNombre) {
        estableceNameUser();
    }
    else {
        localStorage.setItem('nombre', miNombre);
        tituloPersonalizado.textContent = 'Bienvenido a Todointerconectado!, ' + miNombre;
    }
}

// inicialización de la bienvenida
if (!localStorage.getItem('nombre') ) {
    estableceNameUser();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');

    tituloPersonalizado.textContent = 'Bienvenido a Todointerconectado!, ' + nombreAlmacenado;
}

// Manipulará el botón
miBoton.onclick = function() {
    estableceNameUser();
}


// --------------------------------------------------
// It is printed on the terminal console. (Está impreso en la consola del terminal.)
console.log("hello, world!");

// Prints on an alert. (Se imprime en una alerta.)
// alert("Hello, wold!");

// It prints in the html (Se imprime en el html)
document.write(" Texto colocado con document.write!");

// Cambia el texto de la etiqueta seleccionada, en este caso la primera etiqueta <h1> 
const miTitulo = document.querySelector('h2');
miTitulo.textContent='¡Texto cambiado con una función!';






// --------------------------------------------------
// Juego de adivinanzas de números:

// Añadiendo variables para guardar los datos:
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();


// Funciones
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '¡¡¡Fin del juego!!!';
        setGameOver();
    } else {
        lastResult.textContent = '¡Incorrecto!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = '¡El número es muy bajo!';
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '¡El número es muy grande!';
    }
}

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}



