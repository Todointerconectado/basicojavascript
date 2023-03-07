// Sobrecargar tu sitio web de ejemplo:

// Guardo la etiqueta <img> en una variable llamada miImage.
let miImage = document.getElementById('portada');

function cambiarImage () {
    // Creo una variable y guardo el atributo 'src'
    let miSrc = miImage.getAttribute('src');

    // pregunto si el atributo guardado en miSrc es igual a la ruta por defecto impuesta.
    if (miSrc === 'css/images/firefox.png') {
        // Si es true se cambia por la segunda imagen
        miImage.setAttribute('src', 'css/images/firefox2.png');
    }
    else {
        // Si es false se cambia por la imagen por defecto.
        miImage.setAttribute('src', 'css/images/firefox.png');
    }
}

// Le doy el evento onclick a la variable miImagen e igualo a la función cambiarImage.
miImage.onclick = cambiarImage();