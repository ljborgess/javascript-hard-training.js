// ===================================
// EXERCÍCIO 4 - REDUCE EXTREMO
// ===================================

// Exercício 1: Flattening - transformar array aninhado em plano
// Entrada: [[1, 2], [3, 4], [5, 6]]
// Saída esperada: [1, 2, 3, 4, 5, 6]

function flatComReduce(arrays) {
  // TODO: use reduce para achatar
}

// Exercício 2: Pipeline de transformações
// Entrada: [1, 2, 3, 4, 5]
// Operações: filtrar pares, multiplicar por 2, somar
// Saída esperada: 24 (2*2 + 4*2 = 12)

// Dica: crie array de funções de transformação

function pipelineComReduce(numeros) {
  // TODO: implemente
}

// Exercício 3: Criar histograma
// Entrada: [1, 2, 2, 3, 3, 3, 4]
// Saída esperada: "1: *, 2: **, 3: ***, 4: *"

function criarHistogramComReduce(numeros) {
  // TODO: implemente
}

// console.log(flatComReduce([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
// console.log(pipelineComReduce([1, 2, 3, 4, 5])); // 12
// console.log(criarHistogramComReduce([1, 2, 2, 3, 3, 3, 4]));
