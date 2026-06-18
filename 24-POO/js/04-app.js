class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}
// Es mejor una clase que un prototype 
const juan = new Cliente();
juan.setNombre('Javier');
console.log(juan.getNombre());