class Filme {
    constructor(titulo, genero, duracao, direcao, roteiro, elenco) {
        this.titulo = titulo;
        this.genero = genero
        this.duracao = duracao;
        this.direcao = direcao;
        this.roteiro = roteiro;
        this.elenco = elenco;
    }

    mostrarDescricao() {
        return `${this.titulo}
        ${this.genero}
        ${this.duracao}
        Direção: ${this.direcao}
        Roteiro: ${this.roteiro}
        Elenco: ${this.elenco}`;
    }

}
let filme = new Filme("OPPHENHEIMER", ["Biografia", "Histórico", "Suspense"], "3h 01min", "Christopher Nolan", "Christopher Nolan", "Cillian Murphy, Emily Blunt, Matt Damon");
console.log(filme)