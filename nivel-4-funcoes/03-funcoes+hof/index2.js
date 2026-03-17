// ===================================
// EXERCÍCIO 2 - HIGHER ORDER FUNCTIONS AVANÇADO
// ===================================

// Exercício 1: Compose - combine funções
// Entrada: compose(addDois, multiplicarTres)(5)
// Saída esperada: 21 (5 * 3 + 2)

function compose(...funcoes) {
  // TODO: retorne função que executa da direita para esquerda
}

// Exercício 2: Once - execute função apenas uma vez
// Entrada: const init = once(inicializar);
// init(); init(); init(); // inicializar executada 1 vez

function once(fn) {
  // TODO: retorne wrapper que executa fn somente na primeira chamada
}

// Exercício 3: Debounce - aguarde parar de chamar
// Uso: const debouncedSearch = debounce(buscar, 300);
// Chamadas rápidas só executam a última após 300ms

function debounce(fn, delay) {
  // TODO: retorne função debounceada
}

// console.log(compose(n => n + 2, n => n * 3)(5)); // 21
// const init = once(() => console.log('Iniciado'));
// debounce(console.log, 300)('teste');
