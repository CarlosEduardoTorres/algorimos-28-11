const prompt = require('prompt-sync')();

let m = [];
let mAux = [];

for(let linha = 0; linha < 4; linha++){
    m[linha] = [];
    for(let coluna = 0; coluna < 5; coluna++){
        m[linha][coluna] = Number(promprt("Entre com 1 numero: "));
    }
}