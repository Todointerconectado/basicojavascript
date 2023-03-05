// Objects: Función constructora

// Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

// Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

// Cómo generar varios objetos a partir de una función constructora
// Para crear una función constructora, debemos definir los parámetros correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

// Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.
// Los constructores comienzan con mayúscula.

function Auto(brand, model, year){
    this.marca = brand;
    this.modelo = model;
    this.año = year;
    this.detalle = function () {
      let mensaje = `Auto ${this.modelo} del ${this.año}.`;
      return mensaje
    }
}

// Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.

var miAuto = new Auto("Toyota", "Corolla", 2020)
/* Auto {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ ()
}*/

console.log( miAuto.detalle() );

// De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.

var otroAuto1 = new Auto("Tesla", "Model 3", 2021);
var otroAuto2 = new Auto("Suzuki", "K-20", 2019);
var otroAuto3 = new Auto("Ferrari", "Model N", 2018);


console.log( miAuto    );
console.log( otroAuto1 );
console.log( otroAuto2 );
console.log( otroAuto3 );

console.log( miAuto.detalle()    );
console.log( otroAuto1.detalle() );
console.log( otroAuto2.detalle() );
console.log( otroAuto3.detalle() );

// Puede que observes la propiedad __proto__, no te preocupes, ya lo aprenderás.

// Próximos pasos:
// El tema de objetos es extenso, por lo que te dejaré los respectivos cursos del tema:

// Curso de Programación Orientada a Objetos: POO
// Curso Básico de Programación Orientada a Objetos con JavaScript
// Curso Intermedio de Programación Orientada a Objetos en JavaScript



// Ejercicio: Ingresar los datos por la web
function Auto1(MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}

var autos = [];
for(let i = 0 ; i < 3 ; i++){
  var marca  = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio  = prompt("Ingresa el año del auto");
  autos.push(new Auto1 (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

// Ejercicio: Crear una base de datos e imprimir los objetos automatico
var marca = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",	
  "Cadillac",
  "Caterham",
  "Chevrolet",
  "Citroen",
  "Dacia",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar"   	 	 
]

var modelo = [
  "C-Max",
  "Fiesta",
  "Focus",
  "Mondeo",
  "Ka",
  "S-MA",
  " B-MAX",
  "Grand C-Max",
  "Tourneo Custom",
  "Kuga",
  "Galaxy",
  "Grand Tourneo Connect",
  "Tourneo Connect",
  "EcoSport",
  "Tourneo Courier",
  "Mustang",
  "Transit Connect",
  "Edge",
  "Ka+"
]

var anio = [
  "1988",
  "1989",
  "1978",
  "1989",
  "1928",
  "1989",
  "1968",
  "1989",
  "1888",
  "1989",
  "1288",
  "1989",
  "1938",
  "1989",
  "1988",
  "1999",
  "1983",
  "1989",
  "1918"
]

function ConstructorAuto(marca, modelo, anio){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio}

for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
  var nuevoAuto = new ConstructorAuto(marca[i], modelo[i], anio[i]);
  console.log(nuevoAuto)
}

