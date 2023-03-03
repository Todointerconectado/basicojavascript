// ---------------------------- Variables ----------------------------
// let, var, const: Palabra reservada de JS para reservar un espacio en la memoria.
let nombre = "Francisco";
console.log(nombre);

// Declarar una variable.
let edad;

// Inicializar esa variable.
edad = 29;

// Declarar y inicializar.
const cumpleaños = "5/5/1993";
console.log( typeof cumpleaños );
console.log( cumpleaños );

// comillas dobles:  "" 
// Comillas simples: ''
let comillasSimples = 'Francisco "23" Carusso';
console.log(comillasSimples);

// BackTick (alt+96): ``
let text = `Tu tienes ${edad} años`;
console.log(text);

//También, BackTick permite tener text en varias lineas:
let types =
`Tipos primitivos de datos:
1 Número
2 String
3 Booleano
4 Null
5 Undefined
6 Symbol
`;
console.log(types);

// -------------- Array --------------
let elementos = ['computadora', 'celular'];
console.log(elementos);
console.log(elementos[0]);
console.log(elementos[1]);

let persona = {
    nombre: 'Juan',
    edad: 24
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);

