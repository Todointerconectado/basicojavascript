// Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

// Qué son los índices
// El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

let array = [1, 2, 3, 4];

// Cómo acceder a los elementos del array
// Para acceder a los elementos del array se utiliza la siguiente estructura: array[índice]
// Para saber la cantidad de elementos de un array se utiliza la propiedad length.

var longitud = array.length;

console.log(longitud);

// Ten en cuenta que la posición del elemento es diferente al índice del mismo.

// Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 hasta array.length -1. Si se accede a un índice que no existe, devolverá undefined.

var nombres = ["Andres", "Ramiro", "Silvia"]

console.log( nombres[0] );
console.log( nombres[1] );
console.log( nombres[2] );
console.log( nombres[3] );

// Qué es la mutabilidad en los arrays: La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.

// Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Todointerconectado”:

var nombres = ["Andres", "Ramiro", "Silvia"];
console.log(nombres);

// Accedemos y mutamos el segundo elemento
nombres[1] = "Todointerconectado"
console.log(nombres);

// Qué son los métodos de arrays: Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

// Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:
// push    : Agrega uno o varios elementos al final  del array original.
// unshift : Agrega uno o varios elementos al inicio del array original.
// pop     : Extrae el elemento del final  del array original.
// shift   : Extrae el elemento del inicio del array original.

// Cómo utilizar el método push: El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
array = [1,2,3];
console.log(array);

array.push(4,5);
console.log(array);

// Cómo utilizar el método unshift: El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
array = [3,4,5];
console.log(array);

array.unshift(1,2);
console.log(array);

// Cómo utilizar el método pop: El método pop extrae el elemento del final del array original.
array = [1,2,3,4];
console.log(array);

var lastElement = array.pop();
console.log(lastElement);

console.log(array);

// Cómo utilizar el método shift: El método shift extrae el elemento del inicio del array original.
array = [1,2,3,4];
console.log(array);

var firstElement = array.shift();
console.log(firstElement);
console.log(array);

// Cómo utilizar el método indexOf:
// El método indexOf muestra el índice del elemento especificado como argumento.
// Si el elemento no se encuentra en el array, el método devuelve el valor -1.
array = [1,2,3,4];

console.log( array.indexOf(1) ); 
console.log( array.indexOf(2) ); 
console.log( array.indexOf(3) ); 
console.log( array.indexOf(4) ); 
console.log( array.indexOf(5) );


//En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

//Desarrollado con if...else:
function solution(arraySecreto) {
    let typefirstElement = typeof arraySecreto[0];

    if (typefirstElement === 'string') {
        return true;
    }
    else {
        return false;
    }
}

console.log( solution(['Huevo', "Gallina", "Vaca"]) );
console.log( solution([1, "Gallina", "Vaca"])       );


// Desarrollado con el operador ternario:
function solution2(arraySecreto) {
    let typefirstElement = typeof arraySecreto[0];
    return (typefirstElement === "string" ? true: false);
}

console.log( solution2(['Huevo', "Gallina", "Vaca"]) );
console.log( solution2([1, "Gallina", "Vaca"])       );


// Desarrollado con Switch:
function solution3(arraySecreto) {
    let typefirstElement = typeof arraySecreto[0];

    switch(typefirstElement) {
        case 'string': 
            return true;

        default: 
            return false;
    }
}

console.log( solution3(['Huevo', "Gallina", "Vaca"]) );
console.log( solution3([1, "Gallina", "Vaca"])       );


