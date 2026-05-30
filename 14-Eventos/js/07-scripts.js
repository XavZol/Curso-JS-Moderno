// Prevenir el Building con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Distee click en titulo');
    }
    
    if(e.target.classList.contains('precio')) {
        console.log('Distee click en precio');
    }

    if(e.target.classList.contains('card')) {
        console.log('Distee click en card');
    }
});