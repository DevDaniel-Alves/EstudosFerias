//alert("Olá mundo")
//prompt("Qual seu nome?")
//var info = prompt("Qual seu nome?")
//console.log(info)

var n1 = Number(prompt("Qual a nota do aluno?"))
var n2 = Number(prompt("Qual a outra nota do aluno?"))

var media = (n1 + n2) / 2


if (media >= 6 && media <= 10) {
    alert("Aluno aprovado")
} else{
    alert("Reprovado")
}