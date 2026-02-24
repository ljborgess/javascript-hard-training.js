function filterArray(arr){
    if (!Array.isArray(arr)){
        throw new Error ("Precisa ser um Array")
    }
    return arr.filter((x)=> x % 2 === 0)
}

let x = [1,2,3,4,5,6]
console.log(filterArray(x))