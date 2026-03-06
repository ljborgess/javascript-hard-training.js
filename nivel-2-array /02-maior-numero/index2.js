// EXERCÍCIO: Maior Número - Nível 2
// Objetivo: Encontrar maiores de forma mais complexa

// ========================================
// EXERCÍCIO 1: Duas maiores números
// ========================================
// TODO: Crie uma função que retorna os dois maiores números
// Ex: doisMaiores([3, 7, 2, 9, 1, 5]) deve retornar [9, 7]

const  doisMaiores =[3, 7, 2, 9, 1, 5]

doisMaiores.sort((a,b)=> a-b)

const maiores = doisMaiores.slice(-2)

console.log(maiores)




// ========================================
// EXERCÍCIO 2: N maiores números
// ========================================
// TODO: Crie uma função que retorna os N maiores números ordenados
// Ex: nMaiores([3, 7, 2, 9, 1, 5], 3) deve retornar [9, 7, 5]

function nMaiores(arr, n) {
    const ordenados = arr.sort((a, b) => b - a) // ordena do maior para o menor
    const maiores = ordenados.slice(0, n) // pega os N primeiros

    return maiores
}

console.log(nMaiores([3, 7, 2, 9, 1, 5], 3))
// ========================================
// EXERCÍCIO 3: Maior diferença
// ========================================
// TODO: Encontre a maior diferença entre dois números no array
// Ex: maiorDiferenca([3, 7, 2, 9, 1]) deve retornar 8 (9-1)

// ========================================
// EXERCÍCIO 4: Maior número de cada grupo
// ========================================
// TODO: Dado um array de grupos, retorne o maior de cada grupo
// Ex: [
//   [1, 5, 3],
//   [2, 9, 4],
//   [7, 2, 8]
// ] deve retornar [5, 9, 8]

// ========================================
// EXERCÍCIO 5: Maior soma de subsequência
// ========================================
// TODO: Encontre a maior soma de uma subsequência contígua (Array Sequence)
// Ex: maiorSubsequencia([−2, 1, −3, 4, −1, 2, 1, −5, 4]) deve retornar 6 (4 + −1 + 2 + 1)
// Dica: Este é o problema "Maximum Subarray" - use Algoritmo de Kadane
