// EXERCÍCIO: Filter - Nível 3
// Objetivo: Filtros avançados e condicionais complexas

// ========================================
// EXERCÍCIO 1: Filtrar por múltiplos critérios
// ========================================
// TODO: Filtrar números que são pares OU maiores que 10
// Ex: [1, 5, 12, 3, 18, 8] deve retornar [12, 18]
const numbers = [1, 5, 12, 3, 18, 8]

function filter(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }
    return arr
            .filter((number)=>{
                if(number > 10 && number % 2 === 0){
                    return arr 
                }
            })
}
console.log(filter(numbers))


// ========================================
// EXERCÍCIO 2: Filtrar e contar
// ========================================
// TODO: Filtrar números maiores que 5 e retornar [números filtrados, quantidade]
// Ex: [3, 7, 2, 9, 1, 6] deve retornar [[7, 9, 6], 3]


const num = [3, 7, 2, 9, 1, 6]

function filterCount(arr){

    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }

    const filtrados = arr.filter(n => n > 5)

    return [filtrados, filtrados.length]
}

console.log(filterCount(num))
// ========================================
// EXERCÍCIO 3: Filtrar sem modificar original
// ========================================
// TODO: Crie uma função que filtra um array SEM modificar o original
// Retorne um novo array independente

const original = [2,3,4,5,6,6,2,3]

function replicar(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }

    return arr.filter(() => true)
}

console.log(replicar(original))


// ========================================
// EXERCÍCIO 4: Filtro com índice
// ========================================
// TODO: Filtre elementos onde o valor é maior que o índice
// Ex: [5, 1, 8, 2, 6] (índices 0,1,2,3,4)
// Retorna [5, 8, 6] (5>0, 1 não é >1, 8>2, 2 não é >3, 6>4)
const bigger = [5, 1, 8, 2, 6] 

function valueBig(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a array")
    }
    return arr 
            .filter((currentValue,index)=>{
                if(currentValue > index){
                    return arr
                }
            })
}
console.log(valueBig(bigger))

// ========================================
// EXERCÍCIO 5: Filtro customizado com função
// ========================================
// TODO: Crie uma função que aceita um array E uma função de filtro como parâmetro
// Isso deve funcionar como um filter() genérico
// Ex: filtroCustomizado([1,2,3,4,5], x => x % 2 === 0) retorna [2, 4]

function filtroCustomizado(arr){
    if(!Array.isArray(arr)){
        throw new Error("its need to be a Array")
    }
    return arr
            .filter((number)=>{
                if(number % 2 === 0){
                    return arr
                }
            })
}
console.log(filtroCustomizado([1,2,3,4,5,6,7,8]))