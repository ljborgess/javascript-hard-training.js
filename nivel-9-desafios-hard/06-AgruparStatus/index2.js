// ===================================
// EXERCÍCIO 2 - AGRUPAR POR STATUS
// ===================================

// Exercício 1: Agrupe pedidos por status
// Statuses: 'novo', 'processando', 'enviado', 'entregue'
// Resultado: contagem em cada status

const pedidos = [
  { id: 1, status: "novo" },
  { id: 2, status: "processando" },
  { id: 3, status: "novo" },
  { id: 4, status: "enviado" },
  { id: 5, status: "enviado" }
]

function contagemPorStatus(pedidos) {
  if (!Array.isArray(pedidos)) {
    throw new Error("Need to be an Array")
  }

  return pedidos.reduce((acc, pedido) => {

    if (!acc[pedido.status]) {
      acc[pedido.status] = 0
    }

    acc[pedido.status] += 1

    return acc

  }, {})
}

console.log(contagemPorStatus(pedidos))

// Exercício 2: Timeline de status
// Mostre transições de status com tempo

function timelineDeStatus(pedidos) {
  // TODO: mostre histórico de mudanças
}

// Exercício 3: Alertas por status travado
// Se um pedido fica no mesmo status por > 7 dias

function detectarPedidosTravados(pedidos, diasLimite = 7) {
  // TODO: identifique pedidos fora do fluxo
}

// console.log(contagemPorStatus([...]));
// console.log(timelineDeStatus([...]));
// console.log(detectarPedidosTravados([...], 7));
