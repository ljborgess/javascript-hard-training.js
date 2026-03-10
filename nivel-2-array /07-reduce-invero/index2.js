// EXERCÍCIO: Reduce Inverso - Nível 2
// Objetivo: Usar reduce() para operações inversas/diferentes

// ========================================
// EXERCÍCIO 1: Reduce de trás para frente
// ========================================
// TODO: Use reduce() para reverter um array criando uma nova array
// Ex: [1, 2, 3, 4, 5] deve retornar [5, 4, 3, 2, 1]
const number = [1, 2, 3, 4, 5]


function inverse(arr){
    if(!Array.isArray(arr)){
        throw new Error("It's need to be a Array")
    }
    return arr
                .reduce((acc,y)=>{
                    acc.unshift(y)      // faz inverter a array
                    return acc

                },[])
}

console.log(inverse(number))

// ========================================
// EXERCÍCIO 2: Reduce para subtrair
// ========================================
// TODO: Use reduce() para subtrair todos os números sequencialmente
// Ex: [100, 20, 10, 5] deve retornar 65 (100 - 20 - 10 - 5)

const num = [100, 20, 10, 5]

function sub(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }
    return arr 
            .reduce((acc,y)=>{
                return acc - y
            })
}
console.log(sub(num))

// ========================================
// EXERCÍCIO 3: Reduce para dividir
// ========================================
// TODO: Use reduce() para dividir todos os números sequencialmente
// Ex: [100, 2, 5] deve retornar 10 (100 / 2 / 5)

const sequencialNumbers = [100, 2, 5]

function div(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a array")
    }
    return arr 
            .reduce((acc,y)=>{
                return acc / y 
            })
            }

console.log(div(sequencialNumbers))

// ========================================
// EXERCÍCIO 4: Reduce com operação alternada
// ========================================
// TODO: Use reduce() com operações que alternam (multiplicar, dividir, somar)
// Ex: [2, 3, 6] = 2 * 3 / 6 = 1

const  operators = [2,3,6]

function div(arr){
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a array")
    }
    return arr 
            .reduce((acc,y)=>{
                return acc * y / acc
            },1)
            }

console.log(div(operators))

// ========================================
// EXERCÍCIO 5: Reduce para inverter objetos
// ========================================
// TODO: Dado um objeto {chave: valor}, crie o inverso {valor: chave}
// Ex: {a: 1, b: 2, c: 3} deve retornar {1: 'a', 2: 'b', 3: 'c'}
// Use reduce() ou Object.entries() + reduce()
