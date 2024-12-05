let peso = prompt('Qual o seu peso? (ex: 80)');
let altura = prompt('E a sua altura? (ex: 180)') / 100;

function mostrarIMC(peso, altura) {
    let alturaAoQuadrado = altura * altura;
    return peso / alturaAoQuadrado;
}

let IMC = mostrarIMC(peso, altura);
alert(`O seu IMC é ${IMC.toFixed(2)}`);