class Produto{
    #nome
    #preco
    #quantidade
    constructor(nome,preco,quantidade){
        this.#nome = nome
        this.#preco = preco 
        this.#quantidade = quantidade
    }

    calcularTotal(){
    return  this.#preco * this.#quantidade
    
    }
    aplicarDesconto(){
        this.preco -= this.preco*(porcentual/100)
    }
}