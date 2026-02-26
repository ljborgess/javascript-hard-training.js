const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Notebook", preco: 3000 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 }
]


function produtosCaros(obj){
    let soma = 0
    for (let x = 0; x < obj.length ; x++){ 
        soma += obj[x].preco
        }
        if(soma > 500){
            console.log("Deu mais de 500 reais")
        }else{
            console.log("Menos de 500 reais")
        }
    }

console.log(produtosCaros(produtos))



function produtosAcimaMil(obj){
    const newArray = []
    for (let x = 0; x < obj.length ; x++){
        if(obj[x].preco > 1000){
            newArray.push(obj[x])
        }
    }
    return newArray
}

const resultado = produtosAcimaMil(produtos)
console.log(resultado)



function apenasNomes(obj){
    const newArray = []
    for (let x = 0 ; x < obj.length; x ++){
        newArray.push(obj[x].nome)
        } return newArray 
    } 
 
    const pegarNomes = apenasNomes(produtos)
    console.log(pegarNomes)



function temProdutoCaro(obj){
    let soma = 0
    for (let x = 0; x < obj.length; x++){
        soma += obj[x].preco
    }
        if(soma > 1000){
            return true
        }else{
            return false
        }
}
const ProdutosCaros = temProdutoCaro(produtos)
console.log(ProdutosCaros)

function ProdutoMaisCaro(obj){
    //loopar o objeto inteiro pelo
    let maisCaro = obj[0] 
    for (let x = 0; x < obj.length; x ++){
        if (obj[x].preco > maisCaro.preco){
            maisCaro = obj[x]
        } 
    }
    return maisCaro
}

const produtoMaisCaro = ProdutoMaisCaro(produtos)
console.log(produtoMaisCaro)


function ProdutoMaisBarato(obj){
    let maisBarato = obj[0]
    for (let y = 0; y < obj.length ; y++){
        if(obj[y].preco < maisBarato.preco){
            maisBarato = obj[y]
        }
    }
    return maisBarato
}

const produtoMaisBarato = ProdutoMaisBarato(produtos)
console.log(produtoMaisBarato)


function MediaDosPrecos(obj){
    let soma = 0
    let media = 0
        for (let x = 0 ; x < obj.length; x++){
            soma += obj[x].preco
            media = soma / obj.length
        }
        return media
}const media = MediaDosPrecos(produtos)
console.log(media)


function QuantidadeDeProdutosCaros(obj){
    for (let x = 0 ; x < obj.length ; x++){
        if(obj[x].preco > 1000){
            console.log(`O Produto ${obj[x].nome} é caro!${obj[x].preco}`)
        } else{
            console.log(`O Produto ${obj[x].nome} é barato! Possui o valor de ${obj[x].preco}`)
        }
    }
}
const resultado2 = QuantidadeDeProdutosCaros(produtos)
console.log(resultado2)