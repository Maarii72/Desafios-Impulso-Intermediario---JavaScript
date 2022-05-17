let opcaoCorreta = 1;
let chutes = [1,2,3,2,1];

//TODO: Complete o código com uma possível solução para o problema.

let acertos = chutes.filter(
  opcao =>(opcao === opcaoCorreta)
)
let quantAcertos = acertos.length;

console.log(acertos)
console.log(quantAcertos)