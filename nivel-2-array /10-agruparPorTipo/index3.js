// ===================================
// EXERCÍCIO 3 - AGRUPAR POR TIPO AVANÇADO
// ===================================

// Exercício 1: Agrupe objetos por múltiplos campos
// Entrada: [
//   { categoria: 'A', tipo: 'X', valor: 10 },
//   { categoria: 'A', tipo: 'Y', valor: 20 }
// ]
// Saída: { 'A:X': [...], 'A:Y': [...] }

function agruparPorMultiplosCampos(dados, campos) {
  // TODO: implemente agrupamento flexível
}

// Exercício 2: Hierarquia de grupo
// Entrada: [{ país: 'BR', estado: 'SP', cidade: 'São Paulo' }, ...]
// Saída: { BR: { SP: { 'São Paulo': [...] } } }

function hierarquiaDeGrupos(dados, niveis) {
  // TODO: implemente agrupamento recursivo
}

// Exercício 3: Agregação dentro de grupos
// [{ categoria: 'A', valor: 10 }, { categoria: 'A', valor: 20 }]
// Resultado: { A: { total: 30, média: 15, count: 2 } }

function agregarDentroDeGrupos(dados, campo) {
  // TODO: implemente agregação
}

// console.log(agruparPorMultiplosCampos([...], ['categoria', 'tipo']));
// console.log(hierarquiaDeGrupos([...], ['país', 'estado', 'cidade']));
// console.log(agregarDentroDeGrupos([...], 'categoria'));
