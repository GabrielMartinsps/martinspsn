var plus = document.getElementById('plus')
plus.addEventlistener('click', aumentar)
function aumentar(){
var valor = (document.getElementsByTagName('input')
[0]);
var valor = Number(input.value)
console.log(valor)
valor += 10
input.value = valor
console.log(valor)
}

var less = document.getElementById('less')
less.addEventlistener('click', aumentar)
function diminuir(){
var valor = (document.getElementsByTagName('input')
[0]);
var valor = Number(input.value)
console.log(valor)
valor -= 10
input.value = valor
console.log(valor)
}




// var plus = document.getElementsByName(button)

