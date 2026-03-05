const vendas = [
  { cliente: "Ana", valor: 200 },
  { cliente: "João", valor: 300 },
  { cliente: "Ana", valor: 150 },
  { cliente: "Carlos", valor: 400 },
  { cliente: "João", valor: 100 }
];


const totalVendas = vendas.reduce((acc,venda)=>{
 if (!acc[venda.cliente]){
    acc[venda.cliente] = 0
 }
 acc[venda.cliente] += venda.valor
 return acc 
},{})


console.log(totalVendas)