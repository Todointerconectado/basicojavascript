// Combertimos la nodeLists en un array al encapsulation con [...Metodo];
let etiquetaP = [...document.querySelectorAll('p')];
let arrayEtiquetaH1 = document.getElementById('h1');
let arrayEtiquetaId = document.getElementById('code');
let welcome = document.getElementById('welcome');

welcome.style.background = 'blue';
welcome.style.color = 'white';

// Cambiar el color de letras de todas las etiquetas <p>
for (let i = 0; i < etiquetaP.length; i++) {
    etiquetaP[i].style.color = 'red';
}

// Guardo la etiqueta con el id list
let body  = document.getElementById('body');
let list  = document.getElementById('list');
let list2 = document.getElementById('list2');
let childToReplace = document.getElementById('child-to-replace');
// creo un elemento <li>
let newElementAppendChild  = document.createElement('li');
let newElementInsertBefore = document.createElement('li');
let newElementInsertAdjacentElement = document.createElement('li');
let newElementReplaceChild = document.createElement('li');

let newElementBefore  = document.createElement('li');
let newElementPrepend = document.createElement('li');
let newElementAppend  = document.createElement('li');
let newElementAfter   = document.createElement('li');
let newChildReplaceWith   = document.createElement('li');
let newChildIdReplaceWith = document.createElement('li');

// Guardo ub text en el elemento creado
newElementAppendChild.textContent  = `
    Element with: 
    parent.appendChild( newElementAppendChild );`
;
newElementInsertBefore.textContent = `
    Element with: 
    parent.insertBefore( newElementInsertBefore, 
    list.children[2] );`
;
newElementInsertAdjacentElement.textContent = `
    Element with: 
    parent.insertAdjacentElement( "afterend", 
    newElementInsertAdjacentElement );`
;
newElementReplaceChild.textContent = `
    Element with: 
    parent.replaceChild( 
    newElementReplaceChild, 
    list.children[5] );`
;

newElementBefore.textContent  = `
    Element with: 
    parent.before( newElementBefore );`
;
newElementPrepend.textContent  = `
    Element with: 
    parent.prepend( newElementPrepend );`
;
newElementAppend.textContent  = `
    Element with: 
    parent.append( newElementAppend );`
;
newElementAfter.textContent  = `
    Element with: 
    parent.after( newElementAfter );`
;
newChildReplaceWith.textContent = `
    Element with: 
    parent.children[4].replaceWith( 
    newChildReplaceWith );`
;
newChildIdReplaceWith.textContent = `
    Element with: 
    parentId.replaceWith( childToReplace );`
;

// Con appendChild agregamos el elemento al final.
list.appendChild(newElementAppendChild);


/* Para elegir en que lugar insertar el elemento usamos: 

    parent.insertBefore(newElement, referenciaElement);

    Insertar el elemento antes del elemento de referencia.
    La referencia: list.children[0]
    se puede cambiar el indice[i] para la position.
    El elemento newElement se colocaria antes del elemento [i]
*/

list.insertBefore(newElementInsertBefore, list.children[2]);


/* Insertar y eliminar elementos II

    SOPORTE TOTAL:
    parent.insertAdjacentElement(position, element);

    NOTA: Estos dos metodos no se usa demaciado
    parent.insertAdjacentHTML(position, element);
    parent.insertAdjacentText(position, element);

    Las position que tenemos disponibles son:
        beforebegin - Antes de comenzar   (hermano anterior)
        afterbegin  - Después de comenzar (primer hijo)
        beforeend   - Antes del fin       (último hijo)
        afterend    - Después del fin     (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza el hijo por otro
*/

// list.insertAdjacentElement("beforebegin", newElementInsertAdjacentElement);
// list.insertAdjacentElement("afterbegin", newElementInsertAdjacentElement);
// list.insertAdjacentElement("beforeend", newElementInsertAdjacentElement);
list.insertAdjacentElement("afterend", newElementInsertAdjacentElement);


// De esta manera agregamos una etiqueta HTML
list.insertAdjacentHTML(
    'afterbegin',
    `<li>Element with: 
        parent<strong>.insertAdjacentHTML</strong>(
        'afterbegin', 
        '&lt;Etiqueta html&gt; Contenido &lt;/Etiqueta html&gt;' );
    </li>`
);


// De esta manera podemos ingresar text tal cual es escrito.
list.insertAdjacentText(
    `beforebegin`,
    `Element with: parent.insertAdjacentText(
        'beforebegin', '<p> Text tal cual se escriba </p>',
    );`,
);


/* Reemplazar un elemento por otro:
    parent.replaceChild(newChild, oldChild);
*/
list.replaceChild(newElementReplaceChild, list.children[5]);


/*DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions:
        parent.before()  - Antes de comenzar   (hermano anterior)
        parent.prepend() - Después de comenzar (primer hijo)
        parent.append()  - Antes del fin       (último hijo)
        parent.after()   - Después del fin     (hermano siguiente)

        child.replaceWith(newChild);
*/

list2.before(newElementBefore);
list2.prepend(newElementPrepend);
list2.append(newElementAppend);
list2.after(newElementAfter);

list2.children[4].replaceWith(newChildReplaceWith);
childToReplace.replaceWith(newChildIdReplaceWith);


/*Clonar y eliminar elementos

    element.cloneNode(true|false); 
        -Si le pasamos 'true'  Clona todo el elemento con los hijos.
        -Si le pasamos 'false' Clona solo el elemento sin hijos.
    
        element.remove(); - Elimina el nodo del DOM.
    
        element.removeChild(child); - Elimina el nodo hijo del DOM.
*/


let newcloneNodeTrue = document.createElement('div');

let cloneNodeTrue = list.cloneNode(true);
let cloneNodeFalse = list.cloneNode(false);

body.after(cloneNodeTrue);

// Eliminamos el element 2 de la lista2
// list2.removeChild(list2.children[2]);


