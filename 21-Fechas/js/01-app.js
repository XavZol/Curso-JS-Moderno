const diaHoy = new Date();

let valor;
let valor1;
let valor2;
let valor3;
let valor4;
let valor5;

valor = diaHoy;
valor1 = diaHoy;
valor2 = diaHoy;
valor3 = diaHoy;
valor4 = diaHoy;
valor5 = diaHoy;

valor = diaHoy.getFullYear();
valor1 = diaHoy.getMonth() + 1;
valor2 = diaHoy.getMinutes();
valor3 = diaHoy.getHours();
valor4 = diaHoy.getTime();  // milisegundos desde el 1 de enero de 1970
valor5 = diaHoy.setFullYear(2010);  // milisegundos desde el 1 de enero de 1970

console.log(Date.now());  // milisegundos desde el 1 de enero de 1970

console.log(valor);
console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);

new Date 