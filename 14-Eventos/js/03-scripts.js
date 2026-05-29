const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('excrinwinco')
});

busqueda.addEventListener('keyup', () => {
    console.log('excrinwinco')
});

busqueda.addEventListener('blur', () => {
    console.log('excrinwinco')
});

busqueda.addEventListener('copy', () => {
    console.log('excrinwinco')
});

busqueda.addEventListener('paste', () => {
    console.log('excrinwinco')
});

busqueda.addEventListener('cut', () => {
    console.log('excrinwinco')
});

// Hace todos los eventos anteriores con excepción de blur 
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
});

// por si esta vacío el contenido
busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('fallo de la validación')
    }
});


