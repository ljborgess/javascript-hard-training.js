const pedidos = [
 { id: 1, cliente: "Ana", total: 300, status: "pago" },
 { id: 2, cliente: "João", total: 500, status: "pendente" },
 { id: 3, cliente: "Ana", total: 200, status: "pago" },
 { id: 4, cliente: "Carlos", total: 700, status: "cancelado" },
 { id: 5, cliente: "João", total: 100, status: "pago" }
]


const valor = pedidos.reduce((acc,pedido)=>{
    //{}
    if(!acc[pedido.cliente]){
        acc[pedido.cliente] = pedido.status
    }

    return acc
},{})

console.log(valor)


const totalPagos = pedidos.reduce((acc, pedido)=>{
    if (pedido.status === "pago"){
        if(!acc[pedido.cliente]){
            acc[pedido.cliente] =  pedido.status

    }
    }
    return acc

},{})

console.log(totalPagos)


const maiorGasto = pedidos.reduce((acc,pedido)=>{
        return pedido.total > acc.total ? pedido : acc
    
})

console.log(maiorGasto)