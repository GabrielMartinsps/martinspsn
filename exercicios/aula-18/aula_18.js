var dado = [
    'avançar', 'recuar', 'esperar', 'dado', 'normal'
]

function rolarDados(max) {
    var aleatorio = Math.floor(Math.random() * max)
    return aleatorio
}

// function demonstrar() {
//     var resultado = rolarDados(dado.length)
//     console.log
// }

function escolheAcao() {
    var resultado = rolarDados(dado.length)
    return dado[resultado]
}

for (var i = 0; i < 5; i++) {
    var acaoEscolhida = escolheAcao()
    console.log('A jogada escolhida foi ' + acaoEscolhida)
    if (acaoEscolhida ==='avaçar'){
        console.log('...avaçando algumas casas...')
    }
}