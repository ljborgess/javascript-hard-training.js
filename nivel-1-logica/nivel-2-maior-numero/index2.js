function segundoMaior(array){
    let maior  = -Infinity  // duas variaveis infinitas u seja , negativos , positivos ,grandes , pequenos
    let segundoMaior= -Infinity
    for (let numero of array){
        if(numero>maior){
            segundoMaior = maior
            maior = numero
        }else if(numero>segundoMaior && numero !== maior){
            segundoMaior = numero
        }
    }
    return segundoMaior
}

console.log(segundoMaior([1050,1230,20,310102,302,30]))