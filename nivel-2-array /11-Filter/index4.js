// EXERCÍCIO: Array - Domínio Geral
// Objetivo: Exercícios gerais sobre arrays e métodos funcionalidades

// ========================================
// EXERCÍCIO 1: Soma de array
// ========================================
// TODO: Crie uma função que soma todos os elementos de um array
// Ex: somaArray([1, 2, 3, 4, 5]) deve retornar 15
// Implemente duas versões: com for loop e com reduce()

const a = [1, 2, 3, 4, 5]
function sum(arr){
    if(!Array.isArray(arr)){
        throw new Error("need to be a array")
    }
    return arr
            .reduce((acc,value)=> {
                return acc + value
            }) 
} 
console.log(sum(a))

// ========================================
// EXERCÍCIO 2: Filtrar números pares
// ========================================
// TODO: Crie uma função que filtra apenas os números pares de um array
// Ex: filtrarPares([1, 2, 3, 4, 5, 6]) deve retornar [2, 4, 6]
// Use o método filter()

const b = [1, 2, 3, 4, 5, 6]

function filter(arr){
    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }
    return arr 
            .filter((value)=>{
                if(value % 2 === 0){
                    return arr
                }
            })
}

console.log(filter(b))

// ========================================
// EXERCÍCIO 3: Multiplicar cada elemento
// ========================================
// TODO: Crie uma função que multiplica cada elemento de um array por um número
// Ex: multiplicar([1, 2, 3], 2) deve retornar [2, 4, 6]
// Use o método map()

const f = [1, 2, 3]

function multiply(arr){
    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }
    return arr 
            .map((value)=>{
                return value * 2 
            })
}
console.log(multiply(f))

// ========================================
// EXERCÍCIO 4: Encontrar máximo
// ========================================
// TODO: Crie uma função que encontra o maior número em um array
// Ex: maximo([3, 7, 2, 9, 1]) deve retornar 9
// Implemente sem usar Math.max()
const c = [1,5,3,2,5,6,1,12,3,4,1,4,5,7,1]

function highNum(arr){
    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }
    return  Math.max(...arr)        // spread operator , vc separa todos os itens da lista
}

console.log(highNum(c))
// ========================================
// EXERCÍCIO 5: Reverter array
// ========================================
// TODO: Crie uma função que reverte um array sem usar o método reverse()
// Ex: reverter([1, 2, 3, 4, 5]) deve retornar [5, 4, 3, 2, 1]

// ========================================
// EXERCÍCIO 6: Remover duplicatas
// ========================================
// TODO: Crie uma função que remove elementos duplicados de um array
// Ex: removerDuplicatas([1, 2, 2, 3, 3, 3, 4]) deve retornar [1, 2, 3, 4]
// Dicas: Use Set ou filter() + indexOf()

const numeros = [1, 2, 2, 3, 3, 3, 4]
const newArray = [...new Set(numeros)]


console.log(newArray)