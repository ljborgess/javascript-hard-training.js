function agrupar(array){
    let numeros = []
    let strings = []
    let booleans = []

    for(let m = 0; m < array.length; m++){
        if(typeof array[m] === "number"){
            numeros.push(array[m])
        } else if(typeof array[m] === "string"){
            strings.push(array[m])
        } else if(typeof array[m] === "boolean"){
            booleans.push(array[m])
        }
    }

    return {
        numeros,
        strings,
        booleans
    }
}

console.log(agrupar([10,'true',false,15,'25']))