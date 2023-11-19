// -------------------------------------- JS Asincrono ----------------------------------------
// NOTA: Para esta seccion, vamos a utilizar mucho callbacks y arrow function (funciones flecha).
//        Si no estas familarizado con esos conceptos te invitamos a que repases estos temas, y vuelvas cuando estes listo.
//----------------------------- setTimeout ------------------------------
// Las funciones que se ejecutan en paralelo a otras funciones, sin bloquear el hilo de ejecucion y se cargan en paralelo
// son las denominadas funciones asincronas. Un buen ejemplo es la funcion setTimeOut.
// Esta funcion recibe dos parametros: una Callback y un tiempo en milisegundos (ms), para establecer el tiempo de espera para ejecutar la callback.

{
  // Creamos nuestra funcion que muestra un mensaje por consola
  function saludoGenerico() {
    console.log("Hola a todos, soy una funcion asincrona :D");
  }

  //Invocamos a setTimeOut para que muestre nuestro mensaje en 5 segundos
  setTimeout(saludoGenerico, 5000); // 5000 ms = 5 seg
}

//----------------------------- setInterval ------------------------------
// Otra funcion asincrona, es setInterval, que a diferencia de setTimeout que se ejecuta una vez despues de establecer un tiempo de espera,
// esta se ejecuta cada intervalo de tiempo en milisegundos (ms). La desventaja, es que no para de ejecutarse, por lo que no recomiendo utilizarla mucho, a menos que sea necesario.

// {
//   function saludoGenerico() {
//     console.log("Hola a todos, soy una funcion asincrona :D");
//   }

//   //Invocamos a setInterval para que muestre nuestro mensaje cada 5 segundos
//   setInterval(saludoGenerico, 1000); // 5000 ms = 5 seg
// }

//----------------------------- Funciones Sincronas vs Funciones Asincronas ------------------------------

// La ventaja de estas funciones, como se menciono al principio, es que no bloquean el hilo de ejecucion de nuestro codigo.
// Por ejemplo tenemos estas dos funciones, la primera contiene un bucle for, para simular una tarea que puede tomarnos mucho tiempo.
// La segunda, simplemente envia un mensaje por la consola.

{
  function primeraTarea() {
    console.log("Ejecutando la primera tarea:");
    for (let i = 0; i <= 10; i++) {
      console.log(`Realizando Tarea Nº ${i}`);
    }
  }
  function segundaTarea() {
    console.log("Ejecutando la primera segunda:");
    console.log(`Realizando otra tarea independiente a la anterior`);
  }

  primeraTarea(); // -> Va a imprimir 10 veces por consola "Realizando Tarea Nª X"
  segundaTarea(); // Output -> Realizando otra tarea independiente a la anterior
}

//En este ejemplo vemos que hasta que no finalice la primera tarea, la segunda tarea no se va ejecutar.
//Y como se menciono anteriormente, la primera funcion puede ocuparnos mucho tiempo hasta que finalice, 
//y hay veces que queremos que la segunda tarea se ejecute de inmediato, ya que puede no tener relacion ninguna con la primera tarea.
//Una solucion podria ser cambiar el orden de ejecucion de las funciones.
// Pero vamos a ponernos estrictos, y nosotros queremos que el orden de ejecucion este tal cual lo escribimos
// Aca es cuando entra en juego la funcion asincrona setTimeout, le pasamos como argumento la primera tarea y un tiempo de espera en ms:

{
  function primeraTarea() {
    console.log("Ejecutando la primera tarea:");
    for (let i = 0; i <= 10; i++) {
      console.log(`Realizando Tarea Nº ${i}`);
    }
  }
  function segundaTarea() {
    console.log("Ejecutando la primera segunda:");
    console.log(`Realizando otra tarea independiente a la anterior`);
  }

  setTimeout(primeraTarea, 5000); // Despues de 5 segundos, va a ejecutar la primera tarea
  segundaTarea(); // La segunda tarea ahora se ejecuta de inmediato, sin esperar a que finalice la primera tarea
}

//Gracias a la funcion setTimeout, conseguimos que la segundaTarea se ejecute primero, o eso parece.
// Lo que enrealidad sucede, es que setTimeout se ejecuto antes que segunda tarea, pero mientras tanto en paralelo, espera que terminen de ejecutarse el resto de las tareas,
// y al finalizar su tiempo de espera, ejecuta su callback, que en este caso es primeraTarea.

//Para finalizar con este ejemplo, supongamos que primeraTarea recibe un parametro para establecer la condicion del bucle for la cantidad de veces que se repite:

{
  //Primera tarea ahora recibe un parametro "numero" para condicionar el bucle.
  function primeraTarea(numero) {
    console.log("Ejecutando la primera tarea:");
    for (let i = 0; i <= numero; i++) {
      console.log(`Realizando Tarea Nº ${i}`);
    }
  }
  //Cuando le pasemos esta funcion como callback a setTimeout, va a ocurrir un error inesperado.
  //Primero setTimeout espera que la callback no reciba parametros, y segundo porque primeraTarea espera un parametro para condicionar el bucle for:
  //Seguramente pensarias que la solucion seria pasarle el parametro a la callback cuando la invocamos, pero eso no esta permitido hacerlo de la siguiente manera:
  // setTimeout(primeraTarea(5),5000); ESTO NO SE PUEDE HACER
}

//Para solucionar este problema, utilizamos las arrow function como callback. Y dentro de esta arrow function, invocamos la funcion primeraTarea y le pasamos el parametro deseado,
//sin afectar el "contrato" entre setTimeout y la callback que espera como parametro:

{
  //Primera tarea ahora recibe un parametro "numero" para condicionar el bucle.
  function primeraTarea(numero) {
    console.log("Ejecutando la primera tarea:");
    for (let i = 0; i <= numero; i++) {
      console.log(`Realizando Tarea Nº ${i}`);
    }
  }


  setTimeout(() => {
    primeraTarea(5);  //Dentro de la callback invocamos a primeraTarea y le pasamos el numero de veces que queremos que se ejecute el bucle for.
  }, 5000);
}

//Esta practica es muy comun y lo vamos a utilizar muy seguido. Basicamente lo que hacemos, es envolver en una arrow function, la tarea que queremos que se ejecuta cuando termine su tiempo de espera.
// Esto nos otorga mayor flexibilidad, porque nos permite no solo ejecutar una funcion como primeraTarea,
// sino que podemos ejecutar mas funciones con distintos propositos, una vez que se termine su tiempo de espera:

{
  //Primera tarea ahora recibe un parametro "numero" para condicionar el bucle.
  function primeraTarea(numero) {
    console.log("Ejecutando la primera tarea:");
    for (let i = 0; i <= numero; i++) {
      console.log(`Realizando Tarea Nº ${i}`);
    }
  }
  function segundaTarea() {
    console.log("Ejecutando la segunda tarea:");
    console.log(`Realizando otra tarea independiente a la anterior`);
  }
  function terceraTarea() {
    console.log("Ejecutando la tercer tarea:");
    console.log(`Realizando otra tarea independiente a la anterior`);
  }
  setTimeout(() => {
    primeraTarea(5); //Al finalizar su tiempo de espera, ejecuta primera tarea el numero de veces que le indicamos.
    terceraTarea(); //Al finalizar primeraTarea, se ejecuta tercera Tarea
  }, 5000);
  segundaTarea() // segundaTarea, es la primera funcion que se ejecuta.
}

//NOTA: No te preocupes si esto no lo comprendes de entrada, esto es una introduccion a Javascript Asincrono, con ejemplo basicos con setTimeout. 
// Pero la asincronia es mas que una funcion que establece un tiempo de espera. 
// El principal fuerte del javascript asincrono, es el uso del objeto Promise(Promesas), que lo vamos a ver el proximo capitulo.