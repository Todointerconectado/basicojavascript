/*
Tema: Funciones y Estructuras de Control. Guía de ejercicios
Fecha: 07/03/2023
Desarrollado por: Francisco Nicolas Carusso.
*/

// 1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato que es.

let dato;

function tipoDeDato(dato) {
    return `El tipo de dato es: ${typeof dato}`;
}
console.log( tipoDeDato('hola')    );
console.log( tipoDeDato(23)        );
console.log( tipoDeDato(true)      );
console.log( tipoDeDato(null)      );
console.log( tipoDeDato(undefined) );

// 2. Dado dos números ingresados por el usuario, se pide realizar una función que devuelve la resta de ambos números. Mostrar el resultado por la consola


function resta(num1, num2) {
    let num1 = parseInt( prompt("Ingrese un numero: "));
    let num2 = parseInt( prompt("Ingrese otro numero: "));
    return `La resta es: ${num1 - num2}`;
}

console.log(resta());

// 3. Generar una función que le ingresen por parámetro dos valores distintos en dos variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b, Pasarlo a a y mostrarlos

let a = 1;
let b = 2;

function conmutacion(a, b) {
    if(a === b) {
        return 'Ingrese dos parametros distintos';
    }
    else {
        let aux = a;
        a = b;
        b = aux;
        return `El valor de a: ${a} y b: ${b}`
    }
}

console.log( conmutacion(4, 4)   );
console.log( conmutacion(20, 35) );

// 4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado calcular su perímetro, su superficie, e informar los mismos en consola.

let lado = 12;

function cuadrado(lado) {
    
    if (lado === Number(lado)) {
        let perimetro = 4 * lado;
        let superficie = lado * lado;

        return `Informe: Perimetro: ${perimetro}cm, Superficie: ${superficie}cm²`
    }
    else {
        return 'Ingrese un parametro Number';
    }
}

console.log( cuadrado(10)     );
console.log( cuadrado('lado') );
console.log( cuadrado(true)   );

// 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a grados celsius.

let fahrenheit;

function conversionGrados(fahrenheit) {
    
    if (fahrenheit === Number(fahrenheit)) {
        
        let celsius = (fahrenheit - 32) / 1.8;

        return `Celsius: ${celsius}°`
    }
    else {
        return 'Ingrese un parametro Number';
    }
}
console.log( conversionGrados(120) );

// 6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la consola.

let numFactorial;

function factorial(numFactorial) {
    let factorial=numFactorial;
    
    if (numFactorial === Number(numFactorial)) {
        if(numFactorial > 0 && numFactorial < 10) {
            for (let i = (numFactorial-1); i >= 1; i--){
                factorial = factorial * i;
                console.log(`i: ${i}`);
                console.log(`factorial es: ${factorial}`);
            }
            return `El factorial de ${numFactorial} es ${factorial}`
        }
        else{
            return 'Ingrese un número mayor a cero y menor a 10 😁'
        }
    }
    else {
        return 'Ingrese un parametro Number';
    }
}
console.log( factorial(5) );

/* 7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. 
Ejemplo de palíndromo: “Somos o no somos”. 
- Función toLowerCase() - toUpperCase();
- Función length para saber longitud de cadena;
- Función replace para sacar espacios de la cadena;
- Función reverse para revertir los caracteres de la cadena;
- Función split para separar caracteres de la cadena;
- Función join para juntar caracteres de la cadena;
*/

let mensaje;

function palindromo(mensaje) {
    console.log(mensaje);

    let arrayCaracteres = mensaje.toLowerCase().replace().split('');

    console.log(arrayCaracteres);

    let reverse = arrayCaracteres.reverse();

    console.log(reverse);

    let unirCaracteres = reverse.join('');
        
    console.log(unirCaracteres);

    return mensaje == reverse.join('')
        ?'Sí es palindromo'
        :'No es palindromo'
}

console.log( palindromo('neuquen') );


// 8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en Javascript.


function mayúsculaMinuscula(mensaje) {
    let mayúscula = '';
    let minuscula = '';

    for(let i=0; i < mensaje.length; i++) {
        mayúscula += mensaje[i].toUpperCase();
        minuscula += mensaje[i].toLowerCase();
    }
    return `${mayúscula} y ${minuscula}`;
}
console.log(mayúsculaMinuscula('todointerconectado'));



// 9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-7: Suficiente
// 8-9: Notable
//  10: Sobresaliente

function calificacion(nota) {
    
    if (nota === Number(nota)) {
        
        if(nota >= 0 && nota <= 10) {
            // console.log(nota);
            
            if(nota < 3) {
                console.log('🔴 Muy deficiente');
                return '🔴 Muy deficiente';
            }
            else if(nota == 3 || nota == 4) {
                console.log('🟠 Insuficiente');
                return '🟠 Insuficiente';
            }
            else if(nota >= 5 && nota < 8) {
                console.log('🟢 suficiente');
                return '🟢 suficiente';
            }
            else if(nota == 8 || nota == 9) {
                console.log('🧐 Notable');
                return '🧐 Notable';
            }
            else{
                console.log('👑 Sobresaliente');
                return '👑 Sobresaliente';
            }

        }
        else{
            return 'Ingrese un número mayor = a cero y menor a 10 😁'
        }
    }
    else {
        return 'Ingrese un parametro Number';
    }
}
console.log( calificacion() );


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

/*
11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
1
12
123
1234
12345
123456
……
 */

function piramide(tamano) {
    let fila = []; // Creo un array para para guardar los indices

    if (tamano === Number(tamano)) {
        if(tamano > 0 && tamano <= 10) {

            for(let i = 0; i < tamano; i++){
                fila.push(i+1); // Guardo cada indice al final del array
                console.log(fila); // imprimo el array

                // for(let j = 0; j < i; j++){
                // console.log(`${j+1}`); // De esta manera se aplica un salto de linea por cada iteración.
                // }
            }
        }
        else{
            console.log(`Ingrese un número mayor a cero y menor a 10 😁`);
        }
    }
    else {
        console.log('Ingrese un parametro Number');
    }
}

console.log('Ingrese un numero del 1 al 10 en piramide();');
piramide(7);

// function piramide(tamano) {
//     let fila = []; // Creo un array para para guardar los indices
  
//     if (tamano === Number(tamano)) {
//       if (tamano > 0 && tamano <= 10) {
//         console.log('');
        
//         for (let i = 0; i < tamano; i++) {
//           fila.push(i + 1); // Guardo cada indice al final del array
//           console.log(fila); // imprimo el array
  
//           // for(let j = 0; j < i; j++){
//           //   // De esta manera se aplica un salto de linea por cada iteración.
//           //   console.log(`${j+1}`); 
//           // }
//         }
//       }
//       else {
//         // para colocar \ es: (Alt + 92)
//         // Los bastick `` es: (Alt + 96)
//         console.log(`\nIngrese un número mayor a cero y menor a 10 😁`);
//       }
//     }
//     else {
//       console.log(`\nIngrese un parametro Number`);
//     }
//   }
//   console.log('');
//   let tamano = prompt(`Ingrese un numero del 1 al 10: `);
  
//   piramide(Number(tamano));


// 12. Generar una función donde ingresen dos números, el primero corresponde a la cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.


function cajas(cantidadBultosEnStock, cantidadBultosPorCaja ){

    // Math.trunc() devuelve la parte entera de un numero.
    let cajasCompletas = Math.trunc(cantidadBultosEnStock / cantidadBultosPorCaja);
    let bultosSueltos = cantidadBultosEnStock % cantidadBultosPorCaja;

    return `Cajas Completas: ${cajasCompletas} y
    Bultos sueltos: ${bultosSueltos}`;
}

console.log( cajas(11, 3) );


// 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a través de su código y el script saca el descuento correspondiente por la consola.


let fiesta = 'fiesta';
let focus = 'focus';

function tienda(codigo) {
    // Cambio el tipo de variable a string y lo paso a minúscula.
    let codigoLower = String(codigo).toLowerCase();

    // Evalúo las condiciones.
    switch(codigoLower){
        case 'fiesta': return `Descuento del 5%`;
        case 'focus' : return `Descuento del 10%`;
        default      : return `⚠ Ingrese un codigo valido: fiesta o focus`;
    }
}

console.log( tienda(34) );


