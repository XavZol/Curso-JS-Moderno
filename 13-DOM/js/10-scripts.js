// Crear un nueov enlace Generar HTML, una imagen y un card nuevo.

const enlace = document.createElement('A');

// Aggregandole el texto 
enlace.textContent = 'Nuevo Enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';
// enlace.target = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_black"; 

enlace.setAttribute('data-enlace', 'nuevo-enlace') 

enlace.classList.add('alguna-clase')

// Agregar un elemento cuando un enlace fue creado
enlace.onclick = miFunction;

// Seleccionar la navegación
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);

console.log();
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFunction() {
    alert('diste click')
};

// CREAR un CARD

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '8000 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de la info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Texto Alternativo";

// Crearel card 
const card = document.createElement('div')
card.classList.add('card');

// Asingnar la imagen 
card.appendChild(imagen);

// Asignarle la info 
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);