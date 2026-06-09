const diaHoy = new Date();

moment.locale('es');

console.log( moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log( moment().format('llll'));

console.log( moment().add(10, 'days').calendar());

console.log( moment().subtract(1, 'days').calendar() ); // ayer