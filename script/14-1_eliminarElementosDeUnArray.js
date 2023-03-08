// ➖➖➖ Eliminando elementos de un Array ➖➖➖

// El método .push() nos permite agregar uno o más elementos al final de un array. 
// A continuación veremos un ejemplo aplicado con un array que contiene números:

let numArray = [1, 2, 3, 4, 5];

function newNum(a) {
    numArray.push(a); // Agrego elementos.
    return numArray; // retorno el array con los elementos agregados.
}

console.log(newNum(-8)); // [1, 2, 3, 4, 5, -8]

// Como podemos ver, al momento de ejecutar la función se agregan el número -8 al array. 
// Ahora revisemos un ejemplo con strings:

let textArray = ['ana', 'Juan', 'Francisco', 'carusso'];

function addCharacters(a) {
    a = String(a); // Convierto los booleano y number a String
    textArray.push(a);
    return textArray;
}

console.log( addCharacters('maria') ); // ['ana', 'Juan', 'Francisco', 'carusso', 'maria']


// Como podemos ver, agregamos una cadena de strings al ejecutar la función donde tenemos txtArray.push(). Es decir, indico el array al que voy agregar elementos, uso el método .push(), y dentro de .push() indico los elementos que quiero agregar al string. Finalmente, el return lo uso para retornar el array modificado y veo por consola si esto sucedió o no.


// ➖ .shift() ➖
// Necesitamos eliminar un elemento del array. 
// .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log( array ); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

let shiftArray = array.shift();

console.log( shiftArray ); // 1

console.log( array ); // [2, 3, 4, 5, 6, 7, 8, 9]

// Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array.
// ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.


// Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞.
// El método .pop() eliminará el último elemento de un array.
// En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Utilicemos el mismo ejemplo pero usando este método.

array = [1, 2, 3, 4, 5];

console.log( array ); // [1, 2, 3, 4, 5]

let popArray = array.pop();

console.log( popArray ); // 5

console.log( array ); // [1, 2, 3, 4]



// Eliminar elemento que no sean ni el primero y tampoco el último?

// Para eso podemos utilizar la combinación de funciones:
// indexOf() esta nos permite encontrar el índice del elemento que buscamos eliminar.
// splice () Nos permite borrar X índice de un array.

// Ejemplo:
let listaNumeros = ['uno', true, 3];

console.log( typeof listaNumeros    ); // object
console.log( listaNumeros.length    ); // 3 elementos

console.log( typeof listaNumeros[0] ); // tipo string
console.log( typeof listaNumeros[1] ); // tipo boolean
console.log( typeof listaNumeros[2] ); // tipo number

console.log( listaNumeros[0]        ); // valor: uno
console.log( listaNumeros[1]        ); // valor: true
console.log( listaNumeros[2]        ); // valor: 3

let indiceEliminar = listaNumeros.indexOf('uno'); // nos devuelve 0 (indice)
indiceEliminar     = listaNumeros.indexOf(  3  ); // nos devuelve 2 (indice)
indiceEliminar     = listaNumeros.indexOf( true); // nos devuelve 1 (indice)

console.log(indiceEliminar); // 1 indice

// El primer parámetro que enviamos es el indice a eliminar
// El segundo el número de registros que vamos a eliminar.

listaNumeros.splice(indiceEliminar, 1);

console.log(listaNumeros); // Imprime: ['uno', 3]



// ➖➖➖ Modificar el valor de un elemento ➖➖➖
// Desarrollador: Francisco Carusso 👋🏽

let articulos = ['carro', 'celular', 'moto', 'tv'];

// Eldentifiquemos que tipo es la variable:

console.log( typeof articulos ); // Es un object
console.log( articulos.length ); // Tiene 4 elementos

for (let i=0; i < articulos.length; i++) {
    console.log( articulos[i] ); // carro, celular, moto, tv
}

// Ahora que sabemos cuales elementos tiene el Array modifiquemos moto:

//splice(indice, Cuantos elementos, 'laptop');

//El primer parámetro especifica el índice del elemento que quiero eliminar.
//El segundo parámetro especifica cuantos elementos del arreglo quiero eliminar.
//En tercer lugar es el cambio de valor.

let indiceMoto = articulos.indexOf('moto');

console.log( articulos.indexOf('moto') ); // El indice de moto es 2

articulos.splice(indiceMoto, 1, 'laptop');

console.log(articulos); //['carro', 'celular', 'laptop', 'tv']

// Elemento modificado 🤝🏼🥳

