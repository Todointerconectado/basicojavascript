// Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

// En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

var objeto = {
    clave1: "valor1",
    "clave 2": "valor2",
}

// Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

// Qué son los atributos y métodos
// En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

// En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

// Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto");
    }
}

// Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. La propiedad detalle es un método del objeto miAuto.

// Cómo acceder a los valores de un objeto
// A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

// Existen tres formas para acceder al valor de un objeto:

// Mediante la notación de corchetes
// Mediante la notación de punto

// Qué es la notación de corchetes
// La notación de corchetes ya ese familiar para ti, similar a los arrays, indicamos entre corchetes la propiedad del objeto entre comillas.

objeto["propiedad"]

// Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.

console.log(miAuto["marca"]); // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()

// Observa que cuando accedes a un método, únicamente muestra la función, esto sucede porque la propiedad guarda dicha función que aún no es ejecutada. Para ejecutarla hay que utilizar los paréntesis.

miAuto["detalle"]() // "Es un auto"

// Finalmente, ten cuidado con las comillas, si nos las usas, estás haciendo referencia a una variable. En este caso existirán tres posibilidades:

// Si existe la variable y su valor coincide con una propiedad del objeto, entonces mostrará su respectivo valor.
// Si existe la variable, pero su valor no coincide con una propiedad del objeto, entonces mostrará undefined.
// Si no existe la variable, entonces mostrará un error de referencia.

var propiedad1 = "marca";

console.log(miAuto["marca"]);
console.log(miAuto[propiedad1]);
miAuto[propiedad1] // "Toyota"

var propiedad2 = "nombre"
console.log(miAuto[propiedad2]);
miAuto[propiedad2] // undefined

// miAuto[modelo] // ReferenceError: modelo is not defined

// Qué es la notación de punto
// La notación de punto indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

objeto.propiedad

// Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.


console.log( miAuto.marca   ); // "Toyota
console.log( miAuto.modelo  ); // "Corolla"
console.log( miAuto.año     ); // 2020
console.log( miAuto.detalle ); // ƒ detalle()

// Igualmente, para ejecutar el método hay que utilizar los paréntesis.

console.log( miAuto.detalle() );

miAuto.detalle(); // "Es un auto"

// Los arrays también son objetos
// La notación punto te debe de parecer familiar, ya que así usábamos los diferentes atributos y métodos de los arrays, como length o map.

// Esto es debido a que los arrays también son objetos en JavaScript. Por esta razón, también podemos utilizar la notación de corchetes, pero no es recomendable.

var array = [1, 2, 3]
array["length"] // 3

var newArray = array["map"](function (el) {
  return el * 2
})
newArray // [2,4,6]

// Cómo añadir propiedades de un objeto
// Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.

// Por ejemplo, añadamos la propiedad color del objeto miAuto.

miAuto["color"] = "rojo";
// o 
miAuto.color = "rojo";

console.log(miAuto);

/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */

// Cómo modificar propiedades de un objeto
// Para modificar propiedades de un objeto, utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.

// Por ejemplo, modifiquemos la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.

miAuto["marca"] = "Ford"
// o 
miAuto.marca = "Ford"

console.log(miAuto)
/* {
  marca: 'Ford', <--- Cambió de valor
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
} */

// Cómo eliminar propiedades de un objeto
// Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

// Por ejemplo, eliminemos la propiedad marca del objeto miAuto.

delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto);
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */

// El objeto contexto this
// En JavaScript, el objeto contexto this hace referencia a diferentes valores según su contexto de ejecución. Como es un tema complejo de programación orientada a objetos, no profundizaré.

// En objetos, el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

// Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.

// var miAuto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     "año": 2020,
//     detalle: function () {
//         let mensaje = `Auto ${modelo} del ${año}.`;
//         return mensaje;
//     }
// }

console.log( miAuto.detalle()); //ReferenceError: modelo is not defined

// Si ejecutamos la función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.

// Hagamos un pequeño cambio, utilicemos la notación de punto para acceder a los valores de la propiedad.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        return `Auto ${miAuto.modelo} del ${miAuto.año}.`;
    },
}

console.log( miAuto.detalle() ); // 'Auto Corolla del 2020.'

// ¡Funcionó! Sin embargo, necesito crear otro objeto con el mismo código.

var otroAuto = {
    marca: "Toyota",
    modelo: "pana",
    "año": 2020,
    detalle: function () {
        return`Auto ${miAuto.modelo} del ${miAuto.año}.`;
    },
}

console.log( otroAuto.detalle() ); //ReferenceError: miAuto is not defined

// Ahora muestra nuevamente un error de referencia del objeto miAuto. 
// ¿Pero cambio miAuto por otroAuto y problema resuelto?
// Sí, pero como programador no debemos cambiar manualmente el código que puede ser reutilizado.

// Realicemos otro cambio, utilicemos el objeto contexto this para hacer referencia a nuestro objeto.

var otroAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        return`Auto ${this.modelo} del ${this.año}.`;
    },
}

console.log( miAuto.detalle() ); //'Auto Corolla del 2020.'
// ¡Funcionó! Ahora creemos otro objeto.

var otroAuto = {
    marca: "for",
    modelo: "Corolla2",
    "año": 2020,
    detalle: function () {
        return`Auto ${this.modelo} del ${this.año}.`;
    },
}

console.log( otroAuto.detalle() ); //'Auto Corolla del 2020.'

// ¡Volvió a funcionar! Ahora podremos crear varios objetos sin cambiar una y otra vez la referencia al objeto this. En el objeto miAuto, this es igual a miAuto; mientras que en el objeto otroAuto, this es igual a otroAuto. Por eso podemos acceder a los atributos y métodos, independientemente del objeto creado.

// Crear varios objetos a partir de un código base se denomina crear una instancia.