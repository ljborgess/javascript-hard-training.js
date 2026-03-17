// ===================================
// EXERCÍCIO 2 - MÉTODOS DE ARRAY AVANÇADO
// ===================================

// Exercício 1: Use every() para validar todos
// Entrada: [2, 4, 6, 8]
// Validar: todos são pares?
// Saída: true

function todosParesComEvery(numeros) {
  // TODO: use array.every()
}

// Exercício 2: Use some() para encontrar pelo menos um
// Entrada: [1, 3, 5, 6, 7]
// Buscar: existe pelo menos um par?
// Saída: true

function existePelomenosUmPar(numeros) {
  // TODO: use array.some()
}

// Exercício 3: Use find() e findIndex()
// Entrada: [
//   { id: 1, nome: 'João' },
//   { id: 2, nome: 'Maria' }
// ]
// Buscar: usuário 'Maria'
// Saída: { objeto, índice }

function buscarUsuario(usuarios, nome) {
  // TODO: use find() e findIndex()
}

// Exercício 4: Use flat() e flatMap()
// Entrada: [[1, [2, 3]], [4, [5, 6]]]
// Saída (flat): [1, 2, 3, 4, 5, 6]
// Saída (flatMap de ['a', 'b']): ['a', 'a', 'b', 'b']

function nivelamentoDeArrays(arr, depth = 2) {
  // TODO: use flat(depth) e flatMap()
}

// console.log(todosParesComEvery([2, 4, 6, 8])); // true
// console.log(existePelomenosUmPar([1, 3, 5, 6, 7])); // true
// console.log(buscarUsuario([...], 'Maria'));
// console.log(nivelamentoDeArrays([[1, [2, 3]], [4, [5, 6]]]));
