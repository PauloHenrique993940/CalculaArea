/*
Neste exercício você vai praticar a construção de funções com o JavaScript.
Você deve criar uma função chamada "calculaArea".
Ela deverá receber dois parâmetros:
1) base
2) altura
Deverá retornar a multiplicação destes fatores.

Copie o código da função que você escreveu na Plataforma da EBAC que nossos tutores vão avaliar e dar o feedback.

Entrega: Exercício Módulo 6
Olá, estudante!
Uma informação importante: esse exercício foi atualizado, mas alteramos apenas a narrativa, o objetivo continua o mesmo. Se você já realizou a atividade e foi aprovado, pode seguir em sua jornada.
Bons estudos 😄
*/

let base = Number(prompt("Digite o valor da base: "));
let altura = Number(prompt("Digite o valor da altura: "));
function calculaArea(base, altura){
    
    let areaTotal = base * altura;
    return areaTotal;
}

let figura = calculaArea(base, altura);
alert(`A multiplicação de ${base} x ${altura} é ${figura}`);