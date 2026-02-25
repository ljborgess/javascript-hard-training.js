const lista = [1,2,3,4,5,6,7]


const multiplicados = lista.map((numeros)=>{
    return numeros * 5 
})

const soma = multiplicados.reduce((acomulador,numero)=> {
    return acomulador + numero
})
console.log(soma)