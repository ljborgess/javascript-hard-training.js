
const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "tecnologia" },
  { nome: "Mouse", preco: 150, categoria: "tecnologia" },
  { nome: "Cadeira", preco: 800, categoria: "movel" },
  { nome: "Teclado", preco: 250, categoria: "tecnologia" },
  { nome: "Mesa", preco: 1200, categoria: "movel" }
]

function filtrar(produtos){
    if(!Array.isArray(produtos)){
        throw new Error("Tem que ser lista")
    } return produtos.filter(palavra => palavra.categoria === "tecnologia")
}


function desconto(produtos){
    if(!Array.isArray(produtos)){
        throw new Error("Tem que ser uma array")
    } return produtos.map(produto => produto.preco *0.9)
}

const resultado = filtrar(produtos)
console.log(produtos)



const descontos = desconto(produtos)
console.log(descontos)

