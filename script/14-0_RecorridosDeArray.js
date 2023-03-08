// Métodos de recorridos de Arrays

/*
A modo de recopilación:
.filter() : Devuelve todos los elementos del array que cumplan con la condición dada
.map()    : No filtra sino mapea y guarda el valor del nombre del object
.find()   : Devuelve el primer elemento del array que cumpla con la condición dada
.forEach(): Ejecuta lo que le definamos una vez por cada elemento de nuestro array
.some()   : Comprueba si al menos un elemento del array cumple con la condición que le damos, devuelve true
*/

// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

// Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

var articulos = [
    { nombre: "Bici"     , costo: 3000  },
    { nombre: "TV"       , costo: 2500  },
    { nombre: "Libro"    , costo: 320   },
    { nombre: "Celular"  , costo: 10000 },
    { nombre: "Laptop"   , costo: 20000 },
    { nombre: "Teclado"  , costo: 500   },
    { nombre: "Audifonos", costo: 1700  },
]

console.log( typeof articulos ); // object
console.log( articulos.length ); // 7 object


// Cómo utilizar el método filter: Consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

// El método filter recibe dos argumentos:

// La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

// var otherArray = array.filter(function(), thisArg)


// La función, que recibe como argumento el método filter, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.


// const other = array.filter(function(element, index, array))


// Practiquemos el uso del método filter
// Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.

// Entonces utilizamos el método filter que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.


var articulosFiltrados = articulos.filter(
    function (articulo) {
        return articulo.costo <= 500;
    }
)

console.log(articulosFiltrados);
/* [
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Teclado', costo: 500 }
] */

console.log(articulosFiltrados.length); // 2

// .filter: filtra por valor y objeto.


// ------------------------------------------------------

// Cómo utilizar el método map
// El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

// El método map recibe dos argumentos:

// La función que itera y transforma cada elemento del array (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

// var otherArray = array.map(function(), thisArg)

// La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// var otherArray = array.map(function(element, index, array))

// Practiquemos el uso del método map
// Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

// Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.


var nombreArticulos = articulos.map(
    function (articulo) {
        return articulo.nombre;
    }
)

console.log(nombreArticulos);

/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/

// .map : No filtra sino mapea y guarda el valor del nombre del object



// ➖➖ Recorriendo Arrays con .find(), .forEach() y .some() ➖➖

// Para continuar con otros métodos para recorrer arrays, aprenderás find, forEach y some.Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

var articulos = [
    { nombre: "Bici"     , costo: 3000  },
    { nombre: "TV"       , costo: 2500  },
    { nombre: "Libro"    , costo: 320   },
    { nombre: "Celular"  , costo: 10000 },
    { nombre: "Laptop"   , costo: 20000 },
    { nombre: "Teclado"  , costo: 500   },
    { nombre: "Audifonos", costo: 1700  },
]

// Cómo utilizar el método find(): Consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

// El método find recibe dos argumentos:
// ▪ La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
// ▪ Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

// array.find(function(), thisArg)


// La función, que recibe como argumento, utiliza tres parámetros opcionales:
// ▪ El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// ▪  El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// ▪ l array que está iterando.

// array.find(function(element, index, array))

// Practiquemos el uso del método find
// Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

// Entonces utilizamos el método find que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

var algunArticulo = articulos.find(function (articulo) {
    return (articulo.nombre = "Laptop")
})

console.log(algunArticulo); // { nombre: 'Laptop', costo: 3000 }


// Cómo utilizar el método forEach:
// El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

// Este método recibe dos argumentos:

// La función que itera cada elemento del array (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

// array.forEach(function(), thisArg)

// La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// array.forEach(function(element, index, array))

// Practiquemos el uso del método forEach
// Utilicemos el array articulos que definimos para mostrar todos los artículos.

// Entonces utilizamos el método forEach y que ejecute la función console.log para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

articulos.forEach(function (articulo) {
    console.log(articulo)
})

/* 
    { nombre: 'Bici', costo: 3000 }
    { nombre: 'TV', costo: 2500 }
    ...
    { nombre: 'Audifonos', costo: 1700 }
*/

// Cómo utilizar el método some
// El método some es inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

// El método some() recibe dos argumentos:

// La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

// array.some(function(), thisArg)

// La función, que recibe como argumento el método some, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// array.some(function(element, index, array))

// Practiquemos el uso del método some
// Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

// Entonces utilizamos el método some() que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

var existeArticulo = articulos.some(function (articulo) {
    return articulo.costo <= 700
});

console.log(existeArticulo); // true


// Próximos pasos
// Existen más métodos mutables e inmutables de arrays. Si quieres aprender y profundizar sobre este tema, que es fundamental como desarrollador de JavaScript, toma el Curso de Manipulación de Arrays en JavaScript.

/*
A modo de recopilación:
.filter() : Devuelve todos los elementos del array que cumplan con la condición dada
.map()    : No filtra sino mapea y guarda el valor del nombre del object
.find()   : Devuelve el primer elemento del array que cumpla con la condición dada
.forEach(): Ejecuta lo que le definamos una vez por cada elemento de nuestro array
.some()   : Comprueba si al menos un elemento del array cumple con la condición que le damos, devuelve true
*/

// ------------------------------------------------------------
/* Lista de métodos nativos para divertirse con arrays en JavasCript:

-Bucle con            .forEach
-Asserting with       .some and .every
-Afirmando con        .join and .concat
-Pilas y colas con    .pop, .push, .shift, and .unshift
-Mapeo de modelos con .map
-consultando con      .filter
-ordenar con          .sort
-Informática con      .reduce, .reduceRight
-copiando un          .slice
-El poder de          .splice
-búsquedas con        .indexOf

-El operador de entrada
-Yendo en             .reverse
 */


