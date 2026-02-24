
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