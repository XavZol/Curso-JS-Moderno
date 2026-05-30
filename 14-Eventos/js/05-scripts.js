// Evento de scroll del DOM

window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 784) {
        console.log('El elemenato ya esta visible');
    } else {
        console.log('Aun no,, da mas scroll');
    }
});
