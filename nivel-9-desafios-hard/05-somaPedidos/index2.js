// ===================================
// EXERCÍCIO 2 - SOMA DE PEDIDOS
// ===================================

// Exercício 1: Soma por cliente
// [{ cliente_id: 1, valor: 150 }, ...]
// Resultado: { 1: 150, 2: 300 }
const arr = [
  { cliente_id: 1, valor: 100 },
  { cliente_id: 2, valor: 200 },
  { cliente_id: 1, valor: 50 },
  { cliente_id: 2, valor: 100 }
]

function somasPorCliente(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Need to be an Array")
  }

  return arr.reduce((acc, value) => {
    if (!acc[value.cliente_id]) {
      acc[value.cliente_id] = 0
    }

    acc[value.cliente_id] += value.valor

    return acc
  }, {})
}

console.log(somasPorCliente(arr))

// Exercício 2: Pedidos acumulados (running total)
// { cliente: 'João', somas: [100, 200, 350] }

const pedidos = [
  { cliente: "João", valor: 100 },
  { cliente: "João", valor: 100 },
  { cliente: "João", valor: 150 },
]

function pedidosAcumulados(pedidos) {
  if (!Array.isArray(pedidos)) {
    throw new Error("Need to be an Array")
  }

  return pedidos.reduce((acc, pedido) => {

    if (!acc[pedido.cliente]) {
      acc[pedido.cliente] = []
    }

    const ultimoTotal = acc[pedido.cliente].length
      ? acc[pedido.cliente][acc[pedido.cliente].length - 1]
      : 0

    acc[pedido.cliente].push(ultimoTotal + pedido.valor)

    return acc

  }, {})
}
console.log(pedidosAcumulados(pedidos))

// Exercício 3: Diferença entre esperado e real
// Entrada: [{ cliente, esperado: 500, real: 450 }]
// Saída: { cliente, diferenca: -50, percentual: -10% }

function detectarDiscrepancias(pedidos) {}
  // TODO: compare esperado vs rea
// console.log(somasPorCliente([...]));
// console.log(pedidosAcumulados([...]));
// console.log(detectarDiscrepancias([...]));
