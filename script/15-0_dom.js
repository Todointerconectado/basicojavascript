
// Encontrar elementos HTML por nombre de clase:
const pIntro = document.querySelectorAll("p.intro");
const demo = document.getElementById("demo");

demo.innerHTML =`The first paragraph (index 0) with class="intro" is: <br>
    Indice [0]: ${pIntro[0].innerHTML}; <br>
    Indice [1]: ${pIntro[1].innerHTML}
`;


// Búsqueda de elementos HTML por colecciones de objetos HTML:
const frm1 = document.forms["frm1"];
const demoColecciones = document.getElementById("demoColecciones");
let text = "";

for (let i = 0; i < frm1.length - 1 ;i++) {
    text += `[${[i]}]: ${frm1.elements[i].value} <br>`;
}

demoColecciones.innerHTML = text;


// 