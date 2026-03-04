const pedidos = [
  { id: 1, cliente: "Luciano", total: 450, status: "pago" },
  { id: 2, cliente: "Maria", total: 1200, status: "pendente" },
  { id: 3, cliente: "João", total: 300, status: "pago" },
  { id: 4, cliente: "Ana", total: 700, status: "cancelado" },
  { id: 5, cliente: "Carlos", total: 2000, status: "pago" }
]


function filtrar(pedidos){
    if(!Array.isArray(pedidos)){
        throw new Error("O Paramêtro precisa ser uma lista")
    }   return pedidos.filter(palavra => palavra.status === "pago")

    const pedidosPagos = filtrar(pedidos)
    console.log(pedidosPagos)






}

