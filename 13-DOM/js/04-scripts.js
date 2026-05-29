// Retornar un elemento con  querySelector

const card = document.querySelector(`.card`);
console.log(card);

// Tener selectores especificos de CSS
const info = document.querySelector('.premium .info');
console.log(info)

const segundoCard = document.querySelector('section.hospedaje .card');
console.log(segundoCard);

const tercero = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(tercero )

// Seleccionar el formuario 
const formulario = document.querySelector('#formulario');
console.log(formulario)

const hero = document.querySelector('.contenido-hero #formulario')
console.log(hero);

// Seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);