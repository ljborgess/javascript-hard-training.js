const  numeros = [1,2,3,4,5,6]

var pares = numeros.filter((x)=> {
    return x % 2 === 0
})
console.log(pares)


const soma = pares.reduce((acomulador,numeros)=>{
    return acomulador + numeros
});
console.log(soma)



const lista = [5,12,8,20,3,15]

const maiores = lista.filter((x)=>{
    return x > 10

})
console.log(maiores)