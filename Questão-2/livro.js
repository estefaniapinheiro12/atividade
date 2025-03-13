class livro {
    constructor(titulo, autor){
        this.titulo
        this.autor
        this.disponivel = true
    }   
    emprestar (){
        this.disponivel = false;
    }
    devolver (){
        this.disponivel = true;
    }
    exibirDetalhes() {
        return `${this.titulo} por ${this.autor}. Disponível: ${this.disponivel ? 'Sim' : 'Não'}`;
    
    }
}