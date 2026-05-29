// Con querySelectorAll retornamos todos loos objectos de un arreglo

const card = document.querySelectorAll(`.card`);
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no exite 
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste)