class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Buenvenido al cajero`;
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida() { // reescribir un método
        return `Buenvenido al cajero, de empresas`;
    }
}


// Es mejor una clase que un prototype 
const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con juan', 500, 55175189175, 'Aprendizaje en línea');
console.log(empresa)
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());