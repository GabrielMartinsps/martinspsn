function esperar (batata){
    setTimeout (batata, 5000)
}

function ola (){
    console.log ('oi amigos', new Date())
}




function tchau(){
    console.log('tchau amigos', new Date())
}

esperar(ola)
esperar(tchau)

