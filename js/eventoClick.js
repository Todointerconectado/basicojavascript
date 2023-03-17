/*
Ejercicio 1:
  Crear una “caja” con borde negro y color de fondo blanco.
  Al hacer click en un botón el color defondo debe cambiar a rojo.

  Métodos de classList: classList. 
1- .add/remove("class") – agrega o remueve la clase.
2- .toggle("class")     – agrega la clase si no existe, si no la remueve.
3- .contains("class")   – verifica si tiene la clase dada, devuelve true/false .

  Programador: Francisco Carusso
*/

let box1 = document.getElementById('box1');
let btn = document.getElementById('btnRed');
let contador = 0;

function cambiarColor() {
  if (contador == 0) {
    box1.classList.add('boxRed');
    btn.classList.add('boxRed');
    contador = 1;
  }
  else {
    box1.classList.remove('boxRed');
    btn.classList.remove('boxRed');
    contador = 0;
  }
}

// Evento
btn.addEventListener('click', cambiarColor, true);

/* ----------------------------------------------------------------
  Métodos de classList: classList. 
    2- .toggle("class") – Agrega la clase si no existe, si no la remueve.
*/

let box2 = document.querySelector("#box2");
let btnBlue = document.querySelector("#btnBlue");

function cambiarColorBlue() {
  box2.classList.toggle("boxBlue");
  btnBlue.classList.toggle("boxBlue");
}

// Evento
btnBlue.addEventListener('click', cambiarColorBlue, true);


/* ----------------------------------------------------------------
  Ejercicio 2:
    Pedirle al usuario que ingrese un color 
    (usemos el formato hexadecimal o el nombre del color en inglés)
    para luego cambiar el color de fondo de la caja al elegido por el usuario.
*/

let form1 = document.querySelector('#form1');
let box3 = document.getElementById('box3');
let inputBox3 = document.querySelector("#valueColor");
let btnEnviarColor = document.querySelector("#btnEnviarColor");

// e.preventDefault(); Sirve para trabajar con JS al recargar el form.
function enviarValueColor(e) {
  e.preventDefault();
  let valorColor = document.querySelector("#valueColor").value;

  box3.style.background = valorColor;
  inputBox3.style.background = valorColor;
  btnEnviarColor.style.background = valorColor;
}

// Evento
form1.addEventListener('submit', enviarValueColor, true);
