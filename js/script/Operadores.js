// Operadores: Asignación, Comparación y Aritméticos:
//Notas creadas por Francisco Carusso de (Todointerconectado).

// Para realizar operaciones en JavaScript es necesario conocer los diferentes tipos de operadores que necesitarás. Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

// Qué son los operadores aritméticos: Se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:

// Suma
console.log( 2 + 3 );

// Resta
console.log( 5 - 3 );

// Multiplicación
console.log( 4 * 2 );

// División
console.log( 6 / 2 );

// Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.
console.log( 6 / 0 );

// Qué es el operador de residuo ( % ), el signo de porcentaje, devuelve el residuo de una división.
//Residuo
console.log( 21 % 5 );
// Esto es importante para saber los múltiplos de cualquier número o si un número es par.

// Qué es el operador de concatenación: consiste en unir dos o más strings.
console.log( "Hola" + ' ' + "Platzi");
// El operador de concatenación es semejando al operador de suma, pero no es el mismo. Si utilizas este operador con diferentes tipos de datos, JavaScript ejecutará una coerción implícita.


// Cómo utilizar el operador de incremento (++) y decremento (--): consiste en aumentar o disminuir una unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y después de la variable.

// Sin embargo, si se emplea antes o después, el comportamiento es diferente.
let variable = 0;
console.log( variable ); //Inicialización

// Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.
console.log( ++variable ); // Aumenta y devuelve el valor Aumentado 
console.log( variable );   // Devuelve

variable = 0;
console.log( --variable ); // Disminuye y devuelve el valor disminuido
console.log( variable );   // Devuelve

// Si está previamente, el valor de la variable aumenta y devuelve el valor actual.
variable = 0;
console.log( variable++ );  // Aumenta y devuelve el valor actual Inicialización
console.log( variable );    // Devuelve 

variable = 0;
console.log( variable-- );  // Disminuye y devuelve el valor actual Inicialización
console.log( variable );    // Devuelve


// Qué son los operadores de asignación: En la clase de variables aprendiste un operador de asignación (=). Este operador es diferente a los operadores de igualdad (== y ===).

// El operador de asignación (=) consiste en asignar un valor a una variable.
var saludo = "Hola Mundo";


// Operadores de asignación combinada: En ciertos casos, reasignarás la misma variable más otro valor. Estas variables pueden utilizarse como acumuladores o contadores.
var contador = 1;
console.log( contador );

// Acá el valor contador = 1 se le suma 1 y se almacena el resultado en contador, valiendo ahora 2.
contador = contador + 1;
console.log( contador );

// Ahora contador = 2 y se le suma 1, este resultado se vuelve a guardar en contador, valiendo 3.
contador = contador + 1;
console.log( contador );


// Una forma para evitar estar repitiendo la variable en la reasignación, es combinarlas con los operadores aritméticos antes del operador de asignación.

// |-------------Tipo-------------|--Operador--|--Forma larga--|
// | Asignación de suma           |   a += b   |   a = a + b   |
// | Asignación de resta          |   a -= b   |   a = a - b   |
// | Asignación de multiplicación |   a *= b   |   a = a * b   |
// | Asignación de división	      |   a /= b   |   a = a / b   |
// |------------------------------|------------|---------------|

// Ejercicio de operadores de asignación:
// Observa el siguiente código, ¿cuál será el resultador del console.log?
contador = 1

// contador = 1 + 2
contador += 2
console.log( contador );

// contador = 3 - 1
contador -= 1
console.log( contador );

// contador = 2 * 5
contador *= 5
console.log( contador );

// contador = 10 / 2
contador /= 2
console.log( contador );

// Qué son los operadores de comparación: Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

// Qué son los operadores de igualdad: Existen dos tipos de igualdad:
// Igualdad por valor (==): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales en su valor sin importar el tipo de dato.

// Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.
// Igualdad de valor:
console.log( "3" == 3 );
console.log(  3  == 3 );

// Igualdad estricta:
console.log( "3" === 3 );
console.log(  3  === 3 );
// En conclusión, siempre utiliza la comparación por valor y tipo de dato para evitar errores. Los operadores de igualdad son diferentes al operador de asignación (=).


// Qué son los operadores de desigualdad: Igualmente que los operadores de igualdad, existen dos tipos:
// Desigualdad por valor (!=):
console.log( "3" != 3 );
console.log(  3  != 3 );

// Desigualdad por valor y tipo de dato (!==) estricta:
console.log( "3" !== 3 );
console.log(  3  !== 3 );


// Qué son los operadores de mayor o menor: evalúan intervalos, dependiendo si el valor especificado está incluido o no incluido.
// Menor que: 3 es menor que 5?
console.log( 3 < 5 );

// Mayor que: 3 es mayor que 5?
console.log( 3 > 5 );
3 > 5 // false

// Mayor o igual a que: 3 es mayor igual a 3?  | 3 es mayor igual a 5?
console.log( 3 >= 3 );
console.log( 3 >= 5 );

// Menor o igual a que:  3 es menor igual a 3? | 3 es menor igual a 5?
console.log( 3 <= 3 );
console.log( 3 <= 5 );


// ---------------- Qué son los operadores lógicos: ----------------
// Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

// Qué es el operador disyunción lógico o AND (&&): Devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

// |--Expresión 1--|--Expresión 2--|--1 && 2--| = |--Expresión 1--|--Expresión 2--|--1 && 2--|
// |     true      |     true      |   true   | = |       1       |       1       |     1    |
// |     true      |     false     |   false  | = |       1       |       0       |     0    |
// |     false     |     true      |   false  | = |       0       |       1       |     0    |
// |     false     |     false     |   false  | = |       0       |       0       |     0    |
// |---------------|---------------|----------|   |---------------|---------------|----------|

// Por ejemplo, si queremos saber si un número está entre 10 y 20.
// Es decir, un número que es mayor o igual que 10 Y menor o igual que 20.
a = 15;
b = 5;
// a es mayor igual a 10? true
// a es menor igual a 20? true
// true && true = true
console.log( (a >= 10) && (a <= 20) );

// b es mayor igual a 10? false
// b es menor igual a 20? true
// false && true = false
console.log( (b >= 10) && (b <= 20) );


// Qué es el operador unión lógico u OR (||): devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero”.

// |--Expresión 1--|--Expresión 2--|--1 || 2--| = |--Expresión 1--|--Expresión 2--|--1 || 2--|
// |     true      |     true      |   true   | = |       1       |       1       |     1    |
// |     true      |     false     |   true   | = |       1       |       0       |     1    |
// |     false     |     true      |   true   | = |       0       |       1       |     1    |
// |     false     |     false     |   false  | = |       0       |       0       |     0    |
// |---------------|---------------|----------|   |---------------|---------------|----------|

// Por ejemplo, si queremos saber si un número no está entre 10 y 20. Es decir, un número que es menor o igual que 10 O mayor o igual que 20.

a = 15;
b = 5;
// a es menor igual a 10? false
// a es mayor igual a 20? false
// false || false = false
console.log( (a <= 10) || (a >= 20) );

// b es menor igual a 10? true
// b es mayor igual a 20? false
// true || false = true
console.log( (b <= 10) || (b >= 20) );


// Qué es el operador negación lógico o NOT (!): devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

// |--Expresión 1--|---!1---| = |--Expresión 1--|---!1---|
// |     true      |  false | = |       1       |    0   |
// |     false     |  true  | = |       0       |    1   |
// |---------------|--------|   |---------------|--------|

// Por ejemplo, si queremos saber si un número no es menor que 0. Es decir, la negación de que un número es menor que 0.
a = 5;
// a que es 5 es menor a 0? false. al negarlo !false = true
console.log( !(a < 0) );

// También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.

//Notas creadas por Francisco Carusso de Todointerconectado.