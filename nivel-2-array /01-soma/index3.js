// EXERCÍCIO: Soma de Arrays - Nível 3
// Objetivo: Exercícios avançados sobre soma

// ========================================
// EXERCÍCIO 1: Soma condicional
// ========================================
// TODO: Crie uma função que soma apenas números maiores que 5
// Ex: somaCondicional([1, 3, 6, 8, 2, 7]) deve retornar 21 (6+8+7)

const somaCondicional =[1, 3, 6, 8, 2, 7]

function somar(array){
    if(!Array.isArray(array)){
        throw new Error("Tem que ser um array")
    } return array.reduce((acc,y)=>{
        if(y > 5){
        return acc + y
    }
    return acc
    },0)

}
    
console.log(somar(somaCondicional))

// ========================================
// EXERCÍCIO 2: Soma de números positivos
// ========================================
// TODO: Crie uma função que soma apenas números positivos
// Ex: somaPositivos([5, -3, 8, -1, 4]) deve retornar 17 (5+8+4)

const  somaPositivos= [5, -3, 8, -1, 4]

function somarPositivos(arr){
    if(!Array.isArray(arr)){
        throw new Error("Necessita ser uma array")
    }
    return arr.reduce((acc,y)=>{
        if(y > 0){
            return acc + y
        }
        return acc 
    })
}
console.log(somarPositivos(somaPositivos))

// ========================================
// EXERCÍCIO 3: Soma alternada (com sinal)
// ========================================
// TODO: Crie uma função que alterna entre somar e subtrair
// Ex: somaAlternada([1, 2, 3, 4, 5]) deve retornar 1 - 2 + 3 - 4 + 5 = 3

const somaAlternada = [1, 2, 3, 4, 5]


function somarSubtrair(arr){
    if(!Array.isArray(arr)){
        throw new Error("Precisa ser uma Array")
    } return arr
                .reduce((acc,y)=>{
                let soma = acc + y
                let subtrair = acc -y 
                if (y % 2 === 0){
                    return subtrair
                }else{
                    return soma
                }
                
                },0)
}

console.log(somarSubtrair(somaAlternada))

// ========================================
// EXERCÍCIO 4: Soma com multiplicador
// ========================================
// TODO: Crie uma função que soma, mas multiplica cada elemento por seu índice
// Ex: somaComIndice([10, 20, 30]) deve retornar 0*10 + 1*20 + 2*30 = 80
const somaComIndice = [10, 20, 30]

function somarIndice(arr){
    if(!Array.isArray(arr)){
        throw new Error("Necessariamente precisa ser um Array")
    } return arr
                .reduce((acc,y,index)=>{
                    return  acc +(y * index)
                },0)
}


console.log(somarIndice(somaComIndice))

// ========================================
// EXERCÍCIO 5: Soma por categoria
// ========================================
// TODO: Dado um array de objetos com categoria e valor, some por categoria
// Ex: somaPorCategoria([
//   {categoria: 'A', valor: 10},
//   {categoria: 'B', valor: 20},
//   {categoria: 'A', valor: 15}
// ]) deve retornar {A: 25, B: 20}
