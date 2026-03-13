// ===================================
// EXERCÍCIO 3 - MAIOR NÚMERO AVANÇADO
// ===================================

// Exercício 1: Encontre maiores por categoria
const Entrada = [
   { nome: 'A', valor: 10 },
   { nome: 'B', valor: 5 },
   { nome: 'A', valor: 15 },
   { nome: 'B', valor: 8 }
 ]
// Saída esperada: { A: 15, B: 8 }

function maioresParCategoria(arr) {
  // TODO: implemente
  if(!Array.isArray(arr)){
    throw new Error("Need to be a Array")
  }
  return arr 
          .reduce((acc,value)=>{
            if(!acc[value]){
              acc[value.nome] = value.valor
            }
            return acc 

          },[])
}
console.log(maioresParCategoria(Entrada))

// Exercício 2: Encontre os n maiores números únicos
// Entrada: [5, 2, 9, 5, 1, 8, 9, 3], n = 3
// Saída esperada: [9, 8, 5]

function nMaioresUnicos(numeros, n) {
  // TODO: implemente
}

// Exercício 3: Encontre o maior número que não se repete
const entrada  =[5, 2, 9, 1, 8, 9, 3, 5]
// Saída esperada: 8

function maiorSemRepeticao(arr) {
    if(!Array.isArray(arr)){
      throw new Error("Its need to be a array")
    }
    return arr 
            .reduce((acc,value)=>{
                return acc > value ? acc : value
            },arr[0])
}
console.log(maiorSemRepeticao(entrada))
// console.log(maioresParCategoria([...])); 
// console.log(nMaioresUnicos([5, 2, 9, 5, 1, 8, 9, 3], 3)); // [9, 8, 5]
// console.log(maiorSemRepeticao([5, 2, 9, 1, 8, 9, 3, 5])); // 8
