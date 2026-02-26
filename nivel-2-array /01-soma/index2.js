function somarArray(arr){
    if (Array.isArray(arr)){
    console.log("É uma array")       
    }else{
        throw new  Error("Isso não é uma array")
    }
    
    const numerosSomados = arr.reduce((acc,y)=>{
        return acc + y 
    },0)
    return numerosSomados
}
const arr = [1,2,3,4,5,6,4,2,4,5,1,2]

console.log(somarArray(arr))