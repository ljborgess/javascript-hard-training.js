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