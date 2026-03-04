function validador(lista){
    if(!Array.isArray(lista)){
        throw new Error("Precisa ser um array")
    }

    const nome = lista[0]
    const preco = lista[1]
    const estoque = lista[2]

    if(typeof nome !== "string"){
        throw new Error("Nome precisa ser string")
    }

    if(typeof preco !== "number" || preco <= 0){
        throw new Error("Preço precisa ser número maior que 0")
    }

    if(typeof estoque !== "number" || estoque < 0){
        throw new Error("Estoque precisa ser número maior ou igual a 0")
    }

    return {
        nome,
        preco,
        estoque
    }
}

console.log(validador(['notebook', 3000, 500]))