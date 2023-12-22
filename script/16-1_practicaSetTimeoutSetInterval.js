// -------------------------------------- JS Asincrono: Practica ----------------------------------------

// Para esta practica, vamos a utilizar un documento HTML. Este documento se encuentra en el directorio "HTML" (oh, que sopresa (?)),
// y vas a encontrar un archivo llamado setTimeoutSetInterval. Sentite libre de copiar y pegar lo que se encuentra en el documento, ya que simplemente nos va a sevir
// para poner en practica lo que vimos hasta ahora y comprender la primera parte de javascript asincrono.

//-------------------------------------- JS Asincrono: Ejemplos y Ejercicios ----------------------------------------

const buttonTimeout = document.getElementById('setTimeout')
const buttonInterval = document.getElementById('setInterval')

// EJEMPLO SETTIMEOUT
// En este ejemplo tenemos un evento en el button con el ID setTimeot.
// Cuando presionamos el boton, muestra un mensaje en el elemento span con el ID st (de setTimeout) que indica que esta cargando
// Cuando termina el tiempo de espera, ejecuta la funcion mostrarMensaje y reemplaza el contenido del span con el ID st.
// { Ejercicio }: 
// Cuando presionamos el buttonTimeout su atributo "disabled" se establece en verdadero, es decir que nuestro boton queda desactivado y no puede ser presionado devuelta.
// Busca una solucion para el boton se vuelva a habilitar una vez que se cumple el tiempo de espera "llamando" a la funcion habilitarBoton y mostrar el mensaje.

buttonTimeout.onclick = ()=>{
    const span = document.getElementById('st')
    span.innerHTML= 'Cargando ...'
    buttonTimeout.disabled = true
    setTimeout(mostrarMensaje,5000)
}

function mostrarMensaje(){
    const span = document.getElementById('st')
    span.innerHTML = 'Finalizando la Carga :D'
}

function habilitarBoton(){
    buttonTimeout.disabled = false
}

// EJEMPLO SETINTERVAL + CLEARINTERVAL
// En este ejemplo tenemos un evento para el button con el ID setInterval.
// Cuando presionamos el boton, muestra un reloj con la hora actual y se actualiza cada 1 segundo.
// La funcion setInterval esta guardada en una constante llamada "interval". Esto lo hacemos para gestionar un evento que detiene la ejecucion del setInterval.
// Creamos una referencia al button con el ID 'clearInterval', y le establecemos el atributo 'disabled' en falso, es decir que habilitamos el boton de clearInterval.
// Al final, le agregamos un evento al button Clear, y cuando se presiona este boton, finaliza la ejecucion del setInterval, llamando a la funcion clearInterval
// y le pasamos como parametro la referencia al setInterval que creamos al principio (la constante interval).
// { Ejercicio }:
// En el HTML tenemos un parrafo con el ID estado reloj. Cuando se presione el estado del button Interval vamos a querer que el parrafo diga lo siguiente:
// "Detener la hora"
// Y cuando presionemos el button Clear, el parrafo vuelva a mostrar el:
// "Mostrar la hora" 

buttonInterval.onclick = ()=>{
    const interval = setInterval(mostrarHora,1000)
    const buttonClear = document.getElementById('clearInterval')
    buttonClear.disabled = false
    buttonClear.onclick = () =>{
        clearInterval(interval)
        buttonClear.disabled = true
    }
}

function mostrarHora() {
    const span = document.getElementById('si');

    const createTime = (tiempo) => tiempo.toString().padStart(2, "0");

    const hora = new Date();
    const hours = createTime(hora.getHours());
    const minutes = createTime(hora.getMinutes());
    const seconds = createTime(hora.getSeconds());

    // Luego podés igualarlo quedando:
    span.innerHTML = `${hours}:${minutes}:${seconds}`;
}