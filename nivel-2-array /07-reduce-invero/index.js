const lista = [1,2,3,4]

const invertido = lista.reduce((acomulador,numero)=>{
    acomulador.unshift(numero)
    return acomulador
},[])
console.log(invertido)