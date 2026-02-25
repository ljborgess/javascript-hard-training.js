const numeros = [3,8,15,22,5,30]

const maiores = numeros.filter((x)=>{
    return x > 10 
},[])
console.log(maiores)

const multiplicar = maiores.map((x)=>{
    return x * 2
},[])
console.log(multiplicar)



const soma = multiplicar.reduce((acc, y)=>{
    return acc + y
})
console.log(`a soma dos numeros é ${soma}`)



const palavras = ["banana","maçã","abacaxi","uva","ameixa"]

const filtrarA = palavras
    .filter (x => x.startsWith("a"))
    .map((x)=> x.toUpperCase())

    console.log(filtrarA)


const numbers = [10,-5,3,-2,8-1]

    const negativos = numbers
    .filter(x => x < 0)

console.log(negativos)

const numericos = [1,2,3,4,5,6,7,8,9]

const pares = numericos
    .reduce((acc,number)=>{
        if (number % 2 === 0){
            acc++
        }
        return acc 
    },0)
    console.log(pares)
        

const n1 = [5,20,25,30,2,30,10,50,5]

const  high  = n1
    .filter((x)=> x > 20)

console.log(high)

const n2 = [2,4,6,8]

const triple = n2
    .map((x)=> {return x * 3})
console.log(triple)

const n3 = [3,5,9,10,12,14]

const num = n3
    .filter((x)=>
        x % 3 === 0
    )
    .reduce((acc,y)=> acc + y )
console.log(num)
        