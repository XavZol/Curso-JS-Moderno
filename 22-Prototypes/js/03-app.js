function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo ;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

// Instanciarlo
const john = new Cliente('John', 6000);
console.log(john.tipoCliente());
console.log(john.nombreClienteSaldo());
console.log(john);
john.retiraSaldo(1000);
console.log(john.nombreClienteSaldo());

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 8000, 'Curso en Línea');
console.log(CCJ);