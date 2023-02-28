// La coerción consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

// Qué es la coerción implícita:
// Consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.

// Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.

// Algunos de los ejemplos de coerción implícita son los siguientes:
console.log( 4 + "7"   );
console.log( typeof 4 + "7"   );

console.log( 2 + true  );
console.log( typeof 2 + true   );

console.log( false - 3 );
console.log( typeof 2 + true   );

console.log( !3        );
console.log( typeof 2 + true   );

// Para evitar esto realiza la coerción explícita para manejar tipos de datos iguales antes de realizar cualquier operación.

// Qué es la coerción explícita
// Es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.

console.log( Number("47") );
console.log( String(51)   );
console.log( Boolean(1)   );

// Puedes utilizar la palabra reservada typeof para comprobar el tipo de dato transformado.

typeof Number("47"); // 'number'
typeof String(51);   // 'string'
typeof Boolean(1);   // 'boolean'

console.log( 4 + Number("7")   );




















