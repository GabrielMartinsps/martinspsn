function rolarDados(max) {
    var aleatorio = Math.floor(Math.random() * max + 1)
    return aleatorio
}
function criarTabuleiro(casas) {
    var tabuleiro = []
    for (var indice = 1; indice < casas; indice++) {
        tabuleiro.push({
            posicao: indice,
            tipo: 'normal'
        })
    }
    return tabuleiro
}
var resultado = criarTabuleiro(5)
console.log(resultado)

