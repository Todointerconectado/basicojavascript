/*TODO: Asignarle un numero de orden a ester archivo*/

// ---------------------------- Callback ----------------------------
// Las callback son funciones que se pasan como argumento a otra funcion
// Esta tecnica nos permite tener una mejor secuencia de control sobre la ejecucion de nuestras funciones y tener codigo reutilizable y flexibilidad.

//Por ejemplo tenemos cuatro funciones llamadas suma,resta,multiplicacion,division y que nos devuelve el resultado de dicha operacion
//Y una funcion llamada calculadora, que muestra el resultado

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function calculadora(resultado) {
  console.log(resultado);
}

let resultadoSuma = suma(13, 12);
let resultadoResta = resta(100, 89);
let resultadoMutiplicacion = multiplicacion(3.8, 5);
let resultadoDivision = division(188, 2);
calculadora(resultadoSuma); // Output -> 25
calculadora(resultadoResta); // Output -> 11
calculadora(resultadoMutiplicacion); // Output -> 19
calculadora(resultadoDivision); // Output -> 94

//Este ejemplo tiene un problema:
//Es que tenemos que crear una referencia a cada operacion y luego llamar a la calculadora para que muestre cada uno de estos resultados

// Con el uso de las callback podemos ahorrarnos una parte de ese codigo. Podemos modificar nuestra funcion calculadora,
// y que en ves de recibir 1 parametro para mostrar el resultado, reciba 3 parametros: Los operando (a y b) y el operador:

{
  function suma(a, b) {
    return a + b;
  }
  function resta(a, b) {
    return a - b;
  }
  function multiplicacion(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }
  function calculadora(a, b, operador) {
    let resultado = operador(a, b);
    console.log(resultado);
  }

  calculadora(9, 10, suma); // Output -> 19
  calculadora(12, 10, resta); // Output -> 2
  calculadora(3.8, 5, multiplicacion); // Output -> 19
  calculadora(132, 2, division); // Output -> 66
}

//Las callbacks tambien nos permiten definir una nueva funcion que no haya sido definido previamente
//utilizando una funcion anonima o funcion de flecha,
//que nos permiten crear nuevas operaciones sobre la marcha,
//otorgandonos mayor flexibilidad en nuestro codigo.

{
  function calculadora(a, b, operador) {
    let resultado = operador(a, b);
    console.log(resultado);
  }

  //Con una funcion anonima:
  calculadora(25, 25, function (a, b) {
    return (a + b) * 10;
  }); //output -> 500

  //Con una funcion de flecha:
  calculadora(500, 250, (a, b) => {
    return (a - b) / 10;
  }); //output -> 25
}

//Ademas de otorganos codigo reutilizable y flexible,
//las callbacks requieren cierta consitencia en los parametros que esperan al ser invocadas.
//Cuando nuestra calculadora invoca al operador, espera que reciba dos parametros.
//La callback operador, puede o no utilizar esos parametros,
//pero la calculadora REQUIERE que sigua una estructura predefinida.
//De lo contrario, podrian surgir errores inesperados

{
  function calculadora(a, b, operador) {
    let resultado = operador(a, b);
    console.log(resultado);
  }

  //Recibe los parametros a y b, pero no las utiliza.
  calculadora(300, 600, function (a, b) {
    return 2;
  }); //output -> 2

  //Recibe los parametros a y b, los modifica y retorna otro valor esperado
  calculadora(25, 11, function (a, b) {
    a = "25";
    b = "11";
    return `${a} + ${b}`;
  }); //output -> '25 + 11'

  //No recibe ningun parametro, realiza su propia operacion y provoca un resultado inesperado la calculadora.
  calculadora(600, 400, function () {
    return 100 + 100;
  }); //output -> 200

  //Recibe los parametros a y b, y se suma un parametro c, provocando un resultado inesperado para la calculadora.
  calculadora(600, 400, function (a, b, c) {
    return a + b + c;
  }); //output -> NaN
}
