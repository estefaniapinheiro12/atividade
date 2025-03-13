class Animal {
    constructor(nome, especie) {

    }
    emitirSom(){
        return "Som de animal";
    }

}
class Cachorro extends Animal {
    emitirSom() {
        return "Au au";
    }
}
class Gato extends Animal {
    emitirSom() {
        return "Miau";
    }
}

