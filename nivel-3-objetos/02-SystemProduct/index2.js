class Produto{ 
    #nome
    #quantidade
    #preco

    constructor(nome,quantidade,preco){
        this.#nome = nome 
        this.#quantidade = quantidade
        this.#preco = preco
    }

    get nome(){
        return this.#nome
    }

    get preco(){
        return this.#preco
    }

    comparation(produtos){
        return produtos.reduce((maior,atual)=>{
            if(atual.#preco > maior.#preco){
                return atual
            }
            return maior
        })
    }
}

const produto = new Produto("Notebook",5,2000)
const produto2 = new Produto("Mouse",10,50)
const produto3 = new Produto("Teclado",8,150)

const maisCaro = produto.comparation([produto,produto2,produto3])

console.log(maisCaro.nome)
console.log(maisCaro.preco)
// ========================================
// EXERCÍCIO 3: Carrinho de compras
// ========================================
// TODO: Crie um sistema simples com Produto e Carrinho
// Carrinho deve ter: adicionar, remover, calcularTotal()

// ========================================
// EXERCÍCIO 4: Estoque de produtos
// ========================================
// TODO: Crie classe Estoque com registro de quantidades
// Método para verificar se está em falta

// ========================================
// EXERCÍCIO 5: Cupom de desconto
// ========================================
// TODO: Crie sistema que aplica cupons de desconto aos produtos
// Diferentes tipos de cupom (percentual, fixo, etc)
