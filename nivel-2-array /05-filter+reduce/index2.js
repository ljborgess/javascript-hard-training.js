
const lista = [1,2,3,4,5,6,7,8,9,10]

function filtrarPares(arr){
    if (!Array.isArray(arr)){
        throw new Error ( "Tem que ser uma lista ")
    } return arr.filter((x)=> x % 2 === 0)
}
console.log(filtrarPares(lista))

function dobrasValores(arr){
    if(!Array.isArray(arr)){
        throw new Error ("Tem que ser uma lista")
    } return arr.map((x)=> x * 2)
}
console.log(dobrasValores(lista))


function somarTudo(arr){
    if(!Array.isArray(arr)){
        throw new Error("Tem que ser uma lista")
    } return arr.reduce((acc,y)=> acc + y)
}
console.log(somarTudo(lista))


