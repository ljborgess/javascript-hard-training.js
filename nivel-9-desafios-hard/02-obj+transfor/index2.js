// ===================================
// EXERCÍCIO 2 - OBJETOS + TRANSFORMAÇÃO
// ===================================

// Exercício 1: Transforme estrutura aninhada
// Entrada: { a: { b: { c: 123 } } }
// Saída (flat): { 'a.b.c': 123 }

function flattenObjeto(obj, prefixo = '', resultado = {}) {
  // TODO: achate objeto com ponto separador
}

// Exercício 2: Normalize dados de API
// Entrada: { usuarios: [{ id: 1, nome: 'João' }], posts: [...] }
// Saída: { usuarios: {...}, posts: {...} } (indexed por id)

function normalizarDadosAPI(dados) {
  // TODO: crie índices normalizados
}

// Exercício 3: Diference entre dois objetos
// Entrada: obj1, obj2
// Saída: { novo: {...}, removido: {...}, modificado: {...} }

function detectarMudancas(obj1, obj2) {
  // TODO: compares e retorne mudanças
}

// console.log(flattenObjeto({ a: { b: { c: 123 } } }));
// console.log(normalizarDadosAPI({...}));
// console.log(detectarMudancas({...}, {...}));
