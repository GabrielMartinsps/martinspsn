var celular = {
    tela: 4.7,
    marca: 'samsung',
    memoria: '4g',
    cameras: [
        {
            resolucao: '20px',
            zoom: 8
        },
        {
            resolucao: '40px',
            zoom: 10
        }
    ]

}
var iphone = {
    tela: 4.7,
    marca: 'apple',
    memoria: '4g',
    cameras: [
        {
            resolucao: '200px',
            zoom: 80
        }
    ]

}

function demonstrar(produto) {
    console.log('demontrando o produto ' + produto.marca)
    for (var indice = 0; indice < produto.cameras.length; indice++) {
        console.log('demontrando a camera ' + produto.cameras[indice].resolucao + '/' + produto.cameras[indice].zoom)
    }
}
demonstrar(celular)

demonstrar(iphone)