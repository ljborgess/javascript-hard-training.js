// ===================================
// EXERCÍCIO 4 - FILTER ULTRA AVANÇADO
// ===================================

// Exercício 1: Query builder para filtro
// Uso: filter({ nome: /^J/, idade: { gt: 18 } })
// Operadores: gt (>), gte (>=), lt (<), lte (<=)

function criarQueryBuilder(opcoes) {
  // TODO: retorne função que filtra por query
}

// Exercício 2: Fuzzy matching
// Buscar 'jon' encontra 'João' e 'jonathan'

function buscarFuzzy(campo, termo) {
  // TODO: implemente fuzzy matching
}

// Exercício 3: SQL-like WHERE
// filter('preco > 100 AND categoria = "eletrônicos"')

function parseWhere(condicao) {
  // TODO: faça parsing simples de condicao SQL-like
}

// const queryFilter = criarQueryBuilder({ nome: /^a/i, idade: { gt: 20 } });
// console.log(queryFilter(usuarios));
// console.log(buscarFuzzy('nome', 'jon'));
