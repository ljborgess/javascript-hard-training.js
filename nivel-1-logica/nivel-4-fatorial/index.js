function fatorial(valor){
    let resultado = 1
    if(typeof valor !== 'number'){
            console.log('Digite um numero primeiramente!')
    }
    for (let i = valor; i >= 1 ; i--){
        resultado *= i;
    }
    console.log(`O Fatorial de ${valor} é ${resultado}`)

}

console.log(fatorial(10))
