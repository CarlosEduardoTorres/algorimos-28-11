let prompt = require('prompt-sync')();

function somatorio (num){
    let soma = 0;
    for(let i = 1; i <= num; i++){
        soma = soma + i;
    }
    return soma;
}

let num;
num = prompt("Entre com o numero: ");
console.log("O somatorio eh: " + somatorio(num)); 