function validador(lista){
    let nome= []
    let preco =[]
    let estoque = []

for(let x = 0 ; x < lista.length ; x ++){
    if(typeof lista[x] === 'string'){
        nome.push(lista[x])
    }else if(typeof lista[x] === 'number' && lista[x] > 0){
        preco.push(lista[x])

    }else if(typeof lista[x] === 'number' && lista[x] > 0){
        preco.push(lista[x])
    }else if(typeof lista[x] === 'number' && lista[x] >= 0){
        estoque.push(lista[x])
    }
    }
}
console.log(validador(['notebook', 3000, 500]))