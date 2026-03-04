function estatisticas(arr){
    if(arr.length === 0){
        throw new Error("Array vazio")
    }

    const maior = arr.reduce((acc, n) =>
        n > acc ? n : acc
    )

    const menor = arr.reduce((acc, n) => // acc nesse caso sempre vai ser o anterior , e o N é o que anda para frente disc
        n < acc ? n : acc
    )
    const soma = arr.reduce((acc,n)=> 
        acc += n ? n : acc 
    )
    const multiplicacao = arr.reduce((acc,n)=> 
         acc + n * 2  
    )
    return { maior, menor ,soma, multiplicacao }
    
}

console.log(estatisticas([10, 5, 20, 8]))
