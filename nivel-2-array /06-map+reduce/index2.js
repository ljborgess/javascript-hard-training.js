// EXERCÍCIO: Map + Reduce - Nível 2
// Objetivo: Combinar map() e reduce() para transformar e agregar dados

// ========================================
// EXERCÍCIO 1: Map multiplicar e reduzir soma
// ========================================
// TODO: Multiplique cada número por 2 com map(), depois some com reduce()
// Ex: [1, 2, 3, 4] deve retornar 20 (2+4+6+8)

    const  numeros = [1,2,3,4]

    function mapearReduzir(arr){
        if(!Array.isArray(arr)){
            throw new Error("Não é uma necessidade de array")
        }return arr
                    .map((num)=>{return num * 2})
                    .reduce((acc,y)=> acc + y ) 
    }
    console.log(mapearReduzir(numeros))



// ========================================
// EXERCÍCIO 2: Map extrair propriedade e somar
// ========================================
// TODO: Dado um array de objetos com "valor", extraia com map() e some com reduce()
// Ex: [{valor: 10}, {valor: 20}, {valor: 15}] deve retornar 45

const array = [{valor: 10}, {valor: 20}, {valor: 15}]

function extrairSomar(arr){
    if(!Array.isArray(arr)){
        throw new Error ("Is not a Array")
    }
    return arr 
            .map((num)=> num.valor)
            .reduce((acc,y)=>{return acc + y})
}
console.log(extrairSomar(array))

// ========================================
// EXERCÍCIO 3: Map transformar e contar
// ========================================
// TODO: Converta strings em números com map(), depois conte quantos são maiores que 5
// Ex: ["3", "8", "2", "9"] deve retornar 2 (8 e 9)

const strings = ["3", "8", "2", "9"]

function transformar(arr){
    if(!Array.isArray(arr)){
        throw new Error ("Is not a Array")
    }return arr.map(Number)
    
}

console.log(transformar(strings))



// ========================================
// EXERCÍCIO 4: Map criar objetos e agrupar
// ========================================
// TODO: Dado array de nomes, crie objetos {nome, comprimento} e some os comprimentos
// Ex: ["Ana", "Bruno", "Carlos"] deve retornar 14 (3+5+6)






// ========================================
// EXERCÍCIO 5: Map + Reduce com lógica complexa
// ========================================
// TODO: Dado array de preços, aplique desconto de 10% com map() e calcule total com reduce()
// Ex: [100, 200, 150] com 10% desconto = 405 (90+180+135)

const numbers = [100, 200, 150]


function desconto(arr){
    if(!Array.isArray(arr)){
        throw new Error("Is not a array")
    }   return arr
                .map((num) => num * 0.9)
                .reduce((acc,y)=> acc + y )
}

console.log(desconto(numbers))

