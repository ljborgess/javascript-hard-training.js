function maiorNumArray(arr){
    if (!Array.isArray(arr)){
        throw new Error ("Não é uma Array")
    }
    if (arr.length === 0){
        throw new Error("Array Vazio")
    }
    let maior = arr[0]

    for( let i = 0; i < arr.length ; i ++){
        if (typeof arr[i] !== "number"){
            console.log("apenas numeros permitidos!")
        }
        if (arr[i] > maior){
        maior = arr[i]
        }
    }
    return maior
}
console.log(maiorNumArray([3,5,1,123,4,1,3,4,123,44]))
 