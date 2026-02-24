function SomaArray(arr){
    if (!Array.isArray(arr)){
        throw new Error ("O valor informado não é um array");
    }
    let soma = 0
    for (let i = 0; i < arr.length; i ++){
        soma += arr[i];
    }
    return soma
}

console.log(SomaArray([5,5,5,5]))