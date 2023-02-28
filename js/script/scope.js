// Scope: Es el alcance que tienen las variables en relación al campo de aplicación en el codigo.

// Este campo se divide en:
// Scole Grobal: Variables que se aplica en todo el codigo.
// Scole Local:
// Scole de function: Variables que solo se aplican en las funciones.
// Scole de bloque: Variables que solo se aplican en un bloque como un if...else.

// -------------- Ejemplo Scope Global --------------
let nombre = "JavaScript";

function saludar(){
    console.log("Hola " + nombre);
}
// La function no entrega nada porque no retorna ningun dato.
console.log( saludar() );

// -------------- Ejemplo Scope Local --------------
nombre = "Francisco";

function saludar(){
    let apellido = "Carusso";
    console.log(nombre +" "+ apellido);
    return nombre +" "+ apellido;
}

// La variable nombre entra a la function. Se crea apellido, esta sale con return
console.log( saludar() );

// Esta variable esta creada en Scole Local, no tengo acceso.
// console.log( apellido );

// -------------------------------------------------------------------------------
var miNombre = "Francisco";

function nom() {
    var miApellido = "Carusso";
    console.log(miNombre +" "+ miApellido);

    // Dentro de Scole Local puede acceder a Global
    console.log( miNombre );
    console.log( miApellido );

    return miNombre +" "+ miApellido;
}

// La variable nombre entra a la function. Se crea apellido, esta sale con return
console.log( nom() );

console.log( miNombre );
// Pero, desde Global no puede acceder a Local.
console.log( miApellido );

