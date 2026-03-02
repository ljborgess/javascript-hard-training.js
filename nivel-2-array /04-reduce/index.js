
function ReduceArray(arr){
    if(!Array.isArray(arr)){
        throw new Error("Isso não é um array")
    }

    const soma = arr.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    }, 0)

    return soma
}

const arr = [1,2,3,4,5,6,4,2,4,5,1,2]

console.log(ReduceArray(arr))




const numeros = [3,7,12,9,10] 
let soma = 0


for( let x = 0; x <= numeros.length;x++){
    soma = soma + numeros[i]
}
consolle.log(soma)