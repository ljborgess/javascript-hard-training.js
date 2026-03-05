const pedidos = [
  { id: 1, cliente: "Ana", total: 300, status: "pago" },
  { id: 2, cliente: "João", total: 500, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "pago" },
  { id: 4, cliente: "Carlos", total: 700, status: "cancelado" },
  { id: 4, cliente: "Roberto", total: 0, status: "cancelado" }
];
                                    //acomula tudo
   

const totalGastoPorCliente = pedidos.reduce((acc,pedido)=> {
    //{}  
if (!acc[pedido.cliente]) {             
    acc[pedido.cliente] = "n"
}
  //{'CLiente' = 0} criando os paramentros dentro dee uma caixa vazia 
    
    acc[pedido.cliente] = acc[pedido.cliente] + pedido.total
    return acc 
},{})
console.log(totalGastoPorCliente)