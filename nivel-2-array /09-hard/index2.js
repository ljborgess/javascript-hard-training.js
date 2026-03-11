// EXERCÍCIO: Hard - Arrays Nível 2
// Objetivo: Desafios avançados com arrays

// ========================================
// EXERCÍCIO 1: Encontrar pico (peak)
// ========================================
// TODO: Encontre um "pico" - elemento maior que vizinhos
// Ex: [1, 3, 20, 4, 1, 0] o pico é 20 (índice 2)
const a = [1, 3, 20, 4, 1, 0]

function peak(arr){
    if(!Array.isArray(arr)){
        throw new Error("need to be a array")
    }
    return arr
            .reduce((acc,valor)=>{
                return acc > valor ? acc : valor
            })
}
console.log(peak(a))


// ========================================
// EXERCÍCIO 2: Rotacionar array
// ========================================
// TODO: Rotacione um array N posições para a direita
// Ex: rotacionar([1, 2, 3, 4, 5], 2) deve retornar [4, 5, 1, 2, 3]

// ========================================
// EXERCÍCIO 3: Encontrar duplicata missing
// ========================================
// TODO: Array com números 1-n, um número falta, um está duplicado
// Encontre qual falta e qual está duplicado
// Ex: [1, 2, 2, 3] => falta 4, duplicado 2 (ou similar)

// ========================================
// EXERCÍCIO 4: Interseção de arrays
// ========================================
// TODO: Encontre elementos comuns entre dois arrays
// Ex: [1, 2, 3, 4] e [3, 4, 5, 6] => [3, 4]

// ========================================
// EXERCÍCIO 5: Array movimentação
// ========================================
// TODO: Mova zeros para o final mantendo ordem dos outros
// Ex: [0, 1, 0, 3, 12] deve retornar [1, 3, 12, 0, 0]
