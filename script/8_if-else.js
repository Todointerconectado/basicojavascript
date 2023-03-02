// Condicionales: If, Else, else if
//Notas creadas por Francisco Carusso de Todointerconectado.

// Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

// Cómo utilizar el condicional if else en JavaScript:
// Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, si mi edad es mayor o igual que 18, puedo conducir.

let edad = 29;

if (edad >= 18){
    console.log(edad >= 18);
    console.log("Puedes conducir");
}

// La palabra reservada else evalúa cuando la expresión del if es falsa, pero no es obligatorio colocarlo. En el ejemplo anterior, la condición contraria del if es la edad menor que 18, entonces no puedes conducir.

edad = 16;

if (edad >= 18){
    console.log(edad >= 18);
    console.log("Puedes conducir")
} 
else {
    console.log(edad >= 18);
    console.log("No puedes conducir")
}
// En otras palabras, si (if) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (else) efectúo otra acción.

// Cómo anidar condicionales al programar: Has aprendido a usar un condicional, pero ¿y si tenemos varias condiciones? Entonces empleamos las palabras reservadas else if junto a la condición a ejecutar, puedes utilizar varias condiciones que necesites. Sin embargo, JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente. Esto es importante para ordenar las condiciones correctamente y no sobreescribirlas.

// Por ejemplo, un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.

let articulos = 8;
let precio = 10;

function miDescuento(articulos) {
    // condicion1
    if (articulos >= 5 && articulos < 10){
        console.log( articulos >= 5 && articulos < 10 );
        let descuento = (precio * 10) / 100; // Bloque 1
        console.log( (precio * 10) / 100 );
        return console.log(`El precio con el 10% de descuento es: $${precio - descuento}`);
    }
    // condicion2
    else if (articulos >= 10 && articulos < 15){
        console.log( articulos >= 10 && articulos < 15 );
        let descuento = (precio * 15) / 100; // Bloque 2
        console.log( (precio * 15) / 100 );
        return console.log(`El precio con el 15% de descuento es: $${precio - descuento}`);
    }
    // condicion3
    else {
        console.log( articulos >= 10 && articulos < 15 );
        let descuento = (precio * 20) / 100; // Bloque 3
        console.log( (precio * 20) / 100 );
        return console.log(`El precio con el 20% de descuento es: $${precio - descuento}`);
    }
}
console.log( miDescuento(8 ) );
console.log( miDescuento(13) );
console.log( miDescuento(18) );


// Operador ternario: consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

// condicion ? "Bloque verdadero" : "Bloque falso"
// Por ejemplo, guardemos en una variable un mensaje si un número es par o impar.

function esPar(numero){
    return numero % 2 === 0 ? `Es par` : "No es par"
}
console.log( esPar(2) );
console.log( esPar(3) );


//Operador ternario: Un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.
// Notas de Francisco Carusso (@Todointerconectado)

function miDescuento2(articulos){
    return (articulos >= 5 && articulos < 10) === true ?
    `El precio con el 10% de descuento es: $${precio - (precio * 10) / 100}`
    
    :(articulos >= 10 && articulos < 15) === true ?
    `El precio con el 15% de descuento es: $${precio - (precio * 15) / 100}`
    
    :`El precio con el 20% de descuento es: $${precio - (precio * 20) / 100}`
}
console.log( miDescuento2(7 ) );
console.log( miDescuento2(12) );
console.log( miDescuento2(19) );



// Ejercicio de condicionales: Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:
// Genera las variables correspondientes
// Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
// Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.
// ¡Comparte tu trabajo en la sección de aportes!

let papel  = 1;
let tijera = 2;
let piedra = 3;

juego (papel);

function juego(jugador) {
    let IA = Math.ceil(Math.random()*3);

    //  resultado = ( Jugador = papel y IA = piedra ) o ( Jugador = piedra y IA = papel ) ?
    // Si es true = ( Jugador < IA ) ? "Gana User" : "Gana IA"
    let resultado = ( jugador == 1 && IA == 3 || jugador == 3 && IA == 1 ) ? jugador < IA ? "Gana User" : "Perdiste, Gana IA"

    // Si son iguales es un empate.
    :jugador == IA ? "🤝🏼 Empate"

    // 3 > 2 || 3 > 1 || 2 > 1 = true
    // 3 > 1 = true, pero se gestiona en la primera condición
    :jugador > IA ?  "Gana User" : "Perdiste, Gana IA";

    // seleccionamos el icono
    jugador = icon(jugador);
    IA = icon(IA);

    return `Tú:${jugador}, IA:${IA} = ${resultado}`;
}

function icon(cambio){
    return cambio = cambio === 1 ? "📋"
    :cambio === 2 ? "✂" : "🥌";
}

console.log( juego(papel)  );
console.log( juego(tijera) );
console.log( juego(piedra) );