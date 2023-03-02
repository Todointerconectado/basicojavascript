// Notas de Francisco Carusso.
// Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

// Qué son los valores falsy: Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

// Coersión explícita:
console.log( Boolean(0)         );
console.log( Boolean("")        );
console.log( Boolean(null)      );
console.log( Boolean(undefined) );
console.log( Boolean(NaN)       );
console.log( Boolean(false)     );

// También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.

// Coersión implícita (no la uses)
console.log( !!0         );
console.log( !!""        );
console.log( !!null      );
console.log( !!undefined );
console.log( !!NaN       );
console.log( !!false     );

// Qué son los valores truthy: Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.

// Coersión explícita:
console.log( Boolean(12)                 );
console.log( Boolean("hola")             );
console.log( Boolean(true)               );
console.log( Boolean([1, 2, 3])          );
console.log( Boolean(function hola() {}) );
console.log( Boolean({ a: 1, b: 2 })     );

// Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.

console.log( Boolean([]) );
console.log( Boolean({}) );

