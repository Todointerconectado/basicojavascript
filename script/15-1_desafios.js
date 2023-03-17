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



// 5 Piramide de números
function piramideNumeros(numero){
    var piramide = ""
    while (numero<=10){
        for (var i=1;i<=numero;i++){
            piramide = piramide + i;
            console.log(piramide);
        }
    break;
    }
}
var numero = parseInt(prompt("Ingrese un numero:"))
piramideNumeros(numero)


function piramideRepetidos(tope) {
    for (let i = 0; i < tope; i++) {
    let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + i;
        }
    console.log(piso)
    }
}

var tope = prompt("Ingrese un valor:")
piramideRepetidos(tope);


/* 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y devuelve si ese mes tiene 30 o 31 días.
28 febrero 
30 abril junio septiembre noviembre
31 enero marzo mayo julio agosto octubre diciembre

Programador: Francisco Carusso
Fecha: 26/02/2023
Pais: Argentina
*/

function mes() {
    let dias;
    let fecha;
    let pregunta;
    const meses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
  
  
    while (isNaN(fecha)) {
      fecha = parseInt(prompt("Ingrese la fecha del mes del 1 al 12: "));
  
      if (!isNaN(fecha)) {
        while (fecha <= 0 || fecha >= 13) {
          fecha = parseInt(prompt("Ingrese la fecha del mes del 1 al 12: "));
        }
  
        if (fecha > 0 && fecha <= 12) {
          if (fecha == 2) {
            dias = 28;
          }
  
          else if (fecha == 4 || fecha == 6 || fecha == 9 || fecha == 11) {
            dias = 30;
          }
  
          else {
            dias = 31;
          }
  
          console.log(`\nMes: ${fecha}, es ${meses[fecha - 1]}, tiene ${dias} días.\n`);
        }
      }
    }
}

function ingresarMes() {
    do {
        mes();
        console.log('----------------------------------');
        pregunta = prompt('Ingresar otro mes? (si/no): ');
        console.log('----------------------------------\n');
    }
    while (pregunta == 'si');
    console.log('fin. 👍🏼\n');
}

ingresarMes();


