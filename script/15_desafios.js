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

//3
switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}

//4
// Tienes un array de objetos que representan datos de personas con los siguientes atributos:
// name: string
// lastName: string
// age: number
// Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:
// array: Un array de objetos.

let array = [
    {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
    },
    {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
    },
    {
        name: 'Zulema',
        lastName: 'Vicente',
        age: 21
    },
]

function getNames(array) {
    // Tu código aquí 👈
    return array.map( 
        function(array) {
            let arrayName = array.name;
            console.log(arrayName);
            return arrayName;
        }
    )
}

console.log( getNames(array) );



// 5
