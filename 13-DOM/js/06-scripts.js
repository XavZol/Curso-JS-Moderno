// Cambiar el tetxo en html 

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// Changing o encadenamiento .textConstent

console.log(encabezado.innerText); // si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);  // Si lo encontrara
console.log(encabezado.innerHTML); // Solo tare el HTML

// Cambiar el nombre de texto
const nuevoHeading = 'Nuevo Actualizado';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Se puede utilizar cualquuiera de las dos

document.querySelector('.contenido-hero h1').textContent = `Nuevo heading`;


const imagen = document.querySelector('.card img');
imagen.src = hacer2.jpg