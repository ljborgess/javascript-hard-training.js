const pedidos = [
  { id: 1, cliente: "Ana", total: 300, status: "pago" },
  { id: 2, cliente: "João", total: 500, status: "pendente" },
  { id: 3, cliente: "Carlos", total: 200, status: "cancelado" },
  { id: 4, cliente: "Ana", total: 150, status: "pago" },
  { id: 5, cliente: "João", total: 100, status: "pendente" }
];

const agrupados = pedidos
                const resultado = pedidos.reduce((acc, pedido) => {

  if (!acc[pedido.status]) {
    acc[pedido.status] = 0
  }

  acc[pedido.status] += 1

  return acc

}, {})

console.log(resultado)