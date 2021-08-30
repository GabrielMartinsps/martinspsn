const tabuleiro = document.querySelector('#Tabuleiro')

const linhas = tabuleiro.querySelectorAll("tr")

linhas.forEach((linha, indexL) => {

    const colunas = linha.querySelectorAll("td")

    colunas.forEach((td, indexC) => {

        atribuirBombasAosCampos(indexL, indexC)

        const campo = td.querySelectorAll('.campo')[0]
        campo.addEventListener('click', () => {
            alert("fui clicado com botão esquerdo")
        })

        campo.addEventListener('contextmenu', () => {
            // alert("fui clicado com o botão direito")

            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("marcado")) {
                    campo.className = "campo"
                    campo.innerText = ""
                } else {
                    campo.className = "campo marcado"
                    campo.innerText = "M"
                }
            }
        })
    })
})

function atribuirBombasAosCampos(elemento) {
    Math.random();

    if (Math.random() > 0.67) {
        elemento.campo.innerText = "B"
        elemento.className = 'campo bomba'
    } else {
        elemento.campo.innerText = ""
        elemento.className = 'campo'

    }

}




})

// function getRamdon(numero) {
//     return Math.random(numero)
// }

// var numeroPronto = getRamdon()
// console.log(numeroPronto)

// function atribuirBombasAosCampos(indexL, indexC) {
//     for (var i = 0; i < bombas;) {
//         var indexC = Math.floor((Math.random() * indexL));
//         var indexC = Math.floor((Math.random() * indexC));
//         if (matriz[indexL][indexC] === 0) {
//             matriz[indexL][indexC] = -1;
//             i++;
//         }
//     }

// }
 // if (Math.random(numero) > 0.5) {
    //     campo.innerText = "B"
    // } else {
    //     campo.innerText = "_"
    // } 



     // if (Math.floor() * (6 - 1) + 1 > 0.5) {
    //     campo = bomba
    //
