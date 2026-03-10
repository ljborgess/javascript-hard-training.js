// EXERCÍCIO: Reduce - Nível 3
// Objetivo: Usar reduce() para resolver problemas complexos

// ========================================
// EXERCÍCIO 1: Reduzir para encontrar minúsculo
// ========================================
// TODO: Use reduce() para encontrar o menor número de um array
// Ex: [3, 7, 2, 9, 1] deve retornar 1


const menor =  [3, 7, 2, 9, 1]

function menorNum(arr){
    if(!Array.isArray(arr)){
        throw new Error("is not a Array")
    }
    return arr
              .reduce((acc,y) =>{
                return y < acc ? y : acc
            },menor[0])   
}
console.log(menorNum(menor))

// ========================================
// EXERCÍCIO 2: Reduzir para contar ocorrências
// ========================================
// TODO: Use reduce() para contar quantas vezes cada elemento aparece
// Ex: [a, b, a, c, b, a] deve retornar {a: 3, b: 2, c: 1}
const listas = ['a', 'b', 'a', 'c', 'b', 'a'] 

function reduzir(arr){
    if(!Array.isArray(arr)){
        throw new Error("Precisa ser uma array")
    }
    return  arr.reduce((acc, y) => {
        if(!acc[y]){
            acc[y] = 0
        }

        acc[y]++   // soma a ocorrência

        return acc // retorna o acumulador
    }, {})  
            
}

console.log(reduzir(listas))

// ========================================
// EXERCÍCIO 3: Reduzir arrays aninhados
// ========================================
// TODO: Use reduce() para achatar um array de arrays
// Ex: [[1, 2], [3, 4], [5]] deve retornar [1, 2, 3, 4, 5]
// Dica: Use concat() dentro do reduce

// ========================================
// EXERCÍCIO 4: Reduzir com agrupamento
// ========================================
// TODO: Use reduce() para agrupar números por se são pares/ímpares
// Ex: [1, 2, 3, 4, 5, 6] deve retornar {pares: [2, 4, 6], impares: [1, 3, 5]}
const numbers = [1, 2, 3, 4, 5, 6]

function splite(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }
    return arr.reduce((acc, y) => {

        if(y % 2 === 0){
            acc.pares.push(y)
        }else{
            acc.impares.push(y)
        }

        return acc

    }, {pares: [], impares: []})
}

console.log(splite(numbers))

// ========================================
// EXERCÍCIO 5: Reduce com estrutura complexa
// ========================================
// TODO: Dado um array de transações como {tipo: 'entrada/saída', valor: num}
// Use reduce() para calcular o saldo final
// Ex: [{tipo: 'entrada', valor: 100}, {tipo: 'saída', valor: 30}] = 70
