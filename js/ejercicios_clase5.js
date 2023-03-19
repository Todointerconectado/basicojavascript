// Arrays y DOM: Guía de ejercicios
// Programador:   Francisco Carusso
// Fecha: 18/03/2023

// Muestra en consola que a cargado el DOM.
document.addEventListener('DOMContentLoaded', () => {
    console.log(`The DOM document has been fully loaded.`);
});

let ol  = document.getElementById('ol');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let li4 = document.getElementById('li4');
let li5 = document.getElementById('li5');
let li6 = document.getElementById('li6');
let li7 = document.getElementById('li7');
let li9 = document.getElementById('li9');
let li10 = document.getElementById('li10');
let li11 = document.getElementById('li11');
let li12 = document.getElementById('li12');

// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
let arrayColores = ['blue', 'red', 'green', 'gray', 'pink'];

li1.textContent = `Array: ${arrayColores}`;

// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let tercerElementArray = arrayColores[2];
li2.textContent = `Tercer elemento del array[2]: ${tercerElementArray}`;

// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
let primerElementArray = arrayColores[0];
li3.textContent = `La posición [0] del string de la posición [0] del array es: ${primerElementArray[0]}`;


// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
function numAleatorio() {
    let min = Math.ceil(parseInt(prompt(`Ejercicio 4).\nVamos a crear un rango de números.\n Ingrese(escriba) el número minimo: `)));
    let max = Math.floor(parseInt(prompt(`Ejercicio 4).\n Ingrese(escriba) el número maximo: `)));

    let resultado = Math.floor(Math.random() * (max - min) + min);

    return li4.textContent = `El número minimo es: ${min}. El número maximo es: ${max}. 
        El número aleatorio entre ellos es: ${resultado}.`;
}
// numAleatorio();


// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
function rellenarArray() {
    let arrayNum = [];

    for (let i = 1; i <= 10; i++) {
        arrayNum.push(' ' + [i]);
    }
    return li5.textContent = `Array cargado del 1 al 10: ${arrayNum}`;
}
rellenarArray();


// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
function rellenarArrayNumAleatorios() {
    let arrayNumAleatorio = [];
    let min = Math.ceil(parseInt(prompt(`Ejercicio 6).\nVamos a crear un rango de números.\n Ingrese(escriba) el número minimo: `)));
    let max = Math.floor(parseInt(prompt(`Ejercicio 6).\n Ingrese(escriba) el número maximo: `)));

    for (let i = 1; i <= 10; i++) {
        let NumAleatorio = Math.floor(Math.random() * (max - min) + min);
        arrayNumAleatorio.push(' ' + [NumAleatorio]);
    }

    // 7. Del array anterior, créale una copia.
    // Normalmente este método se usa para recuperar una copia de una parte del array.
    // Pero si se usa sin paramétros, nos devolverá una copia de todos los elementos del array.
    let copyArrayNumAleatorioSlice = arrayNumAleatorio.slice();

    // Metodo moderno. Permite expandir los elementos de un elemento iterable en otro lugar.
    let copyArrayNumAleatorioSpread = [...arrayNumAleatorio];

    // Metodo más moderno. Permite crear array de estructuras de datos iterables.
    let copyArrayNumAleatorioFrom = Array.from(arrayNumAleatorio);

    // concat es un método de Array que concatena un array a otro.
    let copyArrayNumAleatorioConcat = [].concat(arrayNumAleatorio);
    copyArrayNumAleatorioConcat[2] = '✅';

    li6.textContent = `Carga del array con números aleatorios del ${min} al ${max}: ${arrayNumAleatorio}`
    li7.insertAdjacentHTML(
        `afterbegin`,
        `
            La copy del array anterior:  <br>
            a) Con el metodo |.slice--| es: ${copyArrayNumAleatorioSlice}. <br>
            b) Con el metodo |.spread| es: ${copyArrayNumAleatorioSpread}. <br>
            c) Con el metodo |.from--| es: ${copyArrayNumAleatorioFrom}. <br>
            d) Con el metodo |.concat| (modificado el indice[2]) es: ${copyArrayNumAleatorioConcat}.
        `
    );
}
// rellenarArrayNumAleatorios();


//8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio.
// Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.
function stringOfText() {
    let array = [];
    do {
        do {
            cadena = prompt(`Ejercicio 8) \n NOTA: Para terminar escribir 'cancelar'.
            Ingrese una palabra u oración para guardar: `);
        } while (!isNaN(cadena));

        if (cadena !== 'cancelar') {
            array.push('-' + cadena);
        }
    } while (cadena !== 'cancelar');

    return li8.textContent = `Array cargado: ${array}`;
}
// stringOfText();

// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.
// 10. 

let form  = document.getElementById('form');
let span1 = document.createElement('span');
let span2 = document.createElement('span');
function convertirMoneda(event) {
    event.preventDefault(); // controlamos los eventos que pasen en el formulario.
    let {pesos, dolar} = event.target; // Accedo a los valores del evento del form.

    let pesosADolar = pesos.value / 300;
    span1.textContent = ` Pesos a Dólares: ${pesosADolar.toFixed(3)}💲`;
    pesos.after(span1); // Ingreso el elemento despues del input.

    // 10. Generar la inversa del ejercicio anterior (de pesos a dólares).
    let DolarAPesos = dolar.value * 300;
    span2.textContent = ` Dólares a Pesos: ${DolarAPesos.toFixed(2)}💲`;
    dolar.after(span2);

}
form.addEventListener('submit', convertirMoneda);


// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. 
// Para ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.

let formGrados = document.querySelector('#formGrados');
let span3 = document.createElement('span');

function convertirTemperature(event) {
    event.preventDefault();
    
    let {centigrados} = event.target;

    let centigradosAFahrenheit = (centigrados.value * 9/5) + 32;

    span3.textContent = `Valor en Grados fahrenheit (°F): ${centigradosAFahrenheit.toFixed(2)}`;
    centigrados.after(span3);

}
formGrados.addEventListener('submit', convertirTemperature);


// 12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario podremos especificar las características de la caja. Ejemplo:

let formCaja = document.querySelector('#formCaja');
let imprimirSolicitud = document.querySelector('#solicitud');

function pedidoCaja(event) {
    event.preventDefault();

    let {nombre, material, valorRadio, comentario} = event.target;

    imprimirSolicitud.innerHTML = `${nombre.value} ha pedido una caja de ${material.value} con una dimensión ${valorRadio.value}. ${comentario.value}`;
}
formCaja.addEventListener('submit', pedidoCaja);



// 13. A través de un formulario, el usuario debe introducir un número secreto que estará entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.




