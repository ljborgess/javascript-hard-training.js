function valorCaro(arr){
    if(arr.length === 0){
        return null
    }

    return arr.reduce((maisCaro, produto) => {
        if(produto.preco > maisCaro.preco){
            return produto
        }
        return maisCaro
    })
}

const produtos = [
    { nome: "TV", preco: 2000 },
    { nome: "Notebook", preco: 5000 },
    { nome: "Mouse", preco: 150 }
]

console.log(valorCaro(produtos))