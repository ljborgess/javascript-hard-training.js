const vendas = [
  { produto: "Notebook", categoria: "tecnologia", valor: 3500 },
  { produto: "Mouse", categoria: "tecnologia", valor: 150 },
  { produto: "Cadeira", categoria: "movel", valor: 800 },
  { produto: "Mesa", categoria: "movel", valor: 1200 },
  { produto: "Teclado", categoria: "tecnologia", valor: 250 }
]

function reduzida(vendas){
   const totalPorCategoria = vendas
                                .reduce((acc,venda)=>{
                                    if(!acc[venda.categoria]){
                                        acc[venda.categoria] = 0 
                                    }
                                    acc[venda.categoria] += venda.valor
                                    return acc
                                },{})
                                return totalPorCategoria
}

const resultado = reduzida(vendas)
console.log(resultado)