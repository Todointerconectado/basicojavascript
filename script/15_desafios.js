// Desafios:

//1 ¿Cuál es su resultado?
let a = 3;
let b = new Number(3);
let c = 3;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(a == b);
console.log(a === b);
console.log(b === c);



//2 ✅ Cambia el array original

function multiplyElements(array) {
    console.log( typeof array );
    console.log( array );

    // Tu código aquí 👈
    for (var i=0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

console.log( multiplyElements([2, 4, 5, 6, 8]) );

//

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}