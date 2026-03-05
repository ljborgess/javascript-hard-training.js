const pedidos = [
  { id: 1, cliente: "Ana", total: 300, status: "pago" },
  { id: 2, cliente: "João", total: 500, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "pago" },
  { id: 4, cliente: "Carlos", total: 700, status: "cancelado" },
];

    const totalPago = pedidos.reduce((acc,y)=> {
         if(y.status === 'pendente'){

            acc += y.total
         }
         return acc
    },0)

console.log(totalPago)