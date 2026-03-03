function duplicar(arr){
    if(!Array.isArray(arr)){
        throw new Error("Isso não é uma lista")
    }
       return  arr.map((x)=>{
            return x * 2
        })
    }
    
    console.log(duplicar([1,4,5,6,5,4]))