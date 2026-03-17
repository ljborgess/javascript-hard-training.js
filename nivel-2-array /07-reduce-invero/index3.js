// ===================================
// EXERCÍCIO 3 - REDUCE INVERSO AVANÇADO
// ===================================

// Exercício 1: Reduza da direita para esquerda
// Entrada: [1, 2, 3, 4]
// Concat da direita: "(((4) + 3) + 2) + 1"

function reduceInverso(arr, fn, inicial) {
  // TODO: implemente ou use reduceRight()
}

// Exercício 2: Inverta estrutura com reduce inverso
// Entrada: { a: 1, b: 2, c: 3 }
// Reduza de trás para frente

function inverterComReduceInverso(obj) {
  // TODO: implemente
}

// Exercício 3: Procure de trás para frente
// Última ocorrência de elemento

function ultimaOcorrencia(arr, elemento) {
  // TODO: use reduceRight para encontrar
}

// console.log(reduceInverso([1, 2, 3, 4], (acc, val) => acc + val, 0)); // 10
// console.log(inverterComReduceInverso({ a: 1, b: 2 }));
// console.log(ultimaOcorrencia([1, 2, 3, 2, 1], 2)); // índice 3
