// Eventos con el mouse

const nav = document.querySelector('.navegacion');

// registro de un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo en nav');

    nav.style.backgroundColor = 'transparent';
});
nav.addEventListener('mousedown', () => {
    console.log('ENtrando en nav');

    nav.style.backgroundColor = 'white';
});
nav.addEventListener('mouseup', () => {
    console.log('ENtrando en nav');

    nav.style.backgroundColor = 'white';
});
nav.addEventListener('dblclick', () => {
    console.log('ENtrando en nav');

    nav.style.backgroundColor = 'white';
});