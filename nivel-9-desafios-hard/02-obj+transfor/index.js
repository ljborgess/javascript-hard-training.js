const numeros =[3,7,2,9,4,10,15]

const pares = numeros.filter((num)=>{
    if(num % 2 === 0){
        console.log(num)
    }
})
function somar(numeros){
const numerosSomados = numeros.reduce((acc,y)=>{
    return acc + y
},0)
    return numerosSomados

}


const resultado  = somar(numeros)
console.log(resultado)