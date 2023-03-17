// Sobrecargar tu sitio web de ejemplo:

// Guardo la etiqueta <img> en una variable llamada miImage.
let miImage = document.querySelector('#portada');

// Creación de la function
function cambiarImage () {
    let src = miImage.getAttribute('src');

    if (src == "css/images/firefox.png") {
        miImage.setAttribute('src', 'css/images/firefox2.png');
    }
    else {
        miImage.setAttribute('src', 'css/images/firefox.png');
    }
}

// Le doy el evento onclick a la variable miImagen e igualo a la función cambiarImage.
miImage.addEventListener('click', cambiarImage, true);