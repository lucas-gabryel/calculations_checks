let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))

let sun = n1 + n2
let sub = n1 - n2
let mul = n1 * n2
let div = n1 / n2
let res = n1 % n2

let evenCheck = sun % 2 == 0
let equalityCheck = n1 == n2

alert(`A soma dos números é ${sun}.`)
alert(`A subtração dos números é ${sub}.`)
alert(`A multiplicação entres esses dois números é ${mul}.`)
alert(`A divisão desses números é ${div.toFixed(2)}.`)
alert(`O resto da divisão desses dois números é ${res}.`)

if (evenCheck) {
    alert("A soma dos dois números é par.")
} else {
    alert("A soma dos dois números não é par.")
}

if (equalityCheck) {
    alert("Os números são iguais.")
} else {
    alert("Os números não são iguais.")
}