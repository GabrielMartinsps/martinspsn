// function converterParaDolar(valorEmReais){
//     return valorEmReais * 5.25
// }
// var valor = 100 + 37*2 - 90
// var valorEmDolar = converterParaDolar(valor)

// console.log(valorEmDolar)

function consultarCotacaoDolar(algoQueVaiAcontecerNoFuturo) {
    console.log('consultarCotacaoDolar: iniciando consulta da cotação')
    setTimeout(function () {
        console.log('consultarCotacaoDolar: finalizada a consulta da cotação')
        algoQueVaiAcontecerNoFuturo(5.25)
    }, 5000)
}

function converterParaDolar(valorEmReais, algoQueVaiAcontecerNoFuturo) {
    consultarCotacaoDolar(function (cotacao) {
        console.log('converterParaDolar: fui avisado que a consulta foi feita', cotacao)
        var valorEmDolar = valorEmReais * cotacao
        algoQueVaiAcontecerNoFuturo(valorEmDolar)
    })
}
var valor = 100 + 37 * 2 - 90
converterParaDolar(valor, function(resultado){
    console.log('principal: fui avisado que meu calculo está pronto', resultado)
})
