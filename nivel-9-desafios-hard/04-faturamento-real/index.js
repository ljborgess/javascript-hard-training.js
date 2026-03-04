const pedidos = [
  { id: 1, cliente: "Ana", total: 300, status: "pago" },
  { id: 2, cliente: "João", total: 500, status: "pendente" },
  { id: 3, cliente: "Maria", total: 150, status: "pago" },
  { id: 4, cliente: "Carlos", total: 800, status: "cancelado" },
  { id: 5, cliente: "Ana", total: 200, status: "pago" }
];

function pedidosPagos(pedidos){
    if(!Array.isArray(pedidos)){
        throw new Error("Precisa ter um paramẽtro array")
    } return pedidos
        .filter((pedido)=> pedido.status === "pago")
        .reduce((acc, y)=> acc+ y.total,0)
        }

        function maiorGasto(pedidos){
            if(!Array.isArray(pedidos)){
                throw new Error("Precisa ser um Array")
            } 
            const totaisPorCliente = pedidos.reduce((acc,pedido)=>{
                if(!acc[pedido.cliente]){
                    acc[pedido.cliente] = 0
                }

                acc[pedido.cliente] += pedido.total
                return acc 
            },{})
}

const Pedidos = pedidosPagos(pedidos)
console.log(Pedidos)


const MaioresGastos = maiorGasto(pedidos)
console.log(MaioresGastos)