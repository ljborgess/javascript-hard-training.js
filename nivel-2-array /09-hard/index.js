const pessoas = [
  { nome: "Ana", alturas: [1.60, 1.62, 1.61] },
  { nome: "Bruno", alturas: [1.80, 1.78, 1.79] },
  { nome: "Carlos", alturas: [1.70, 1.72, 1.71] }
]


    for(let i = 0; i < pessoas.length; i++){
        let soma = 0
        for (let j = 0;j< pessoas[i].alturas.length;j++){
            soma = soma + pessoas[i].alturas[j]
        }
        const media = soma / pessoas[i].alturas.length
        console.log(pessoas[i].nome , media)
    }


 const cidades = [
  { nome: "SP", temperaturas: [30, 28, 32] },
  { nome: "RJ", temperaturas: [35, 33, 36] },
  { nome: "MG", temperaturas: [25, 27, 26] }
]

    for (let i = 0 ; i < cidades.length; i++){ 
        let soma = 0
        for (let j = 0; j < cidades[i].temperaturas[j];j++){
            soma = soma + cidades[i].temperaturas[j]
    }
    const mediaTemp = soma / cidades[i].temperaturas.length
    console.log (cidades[i].nome, mediaTemp)

    if(mediaTemp > 30){
        console.log('Está muito quente')
    }
    if(mediaTemp <=30){
        console.log("Está muito frio")
    }
}

const vendedores = [
  { nome: "Ana", vendas: [500, 700, 600] },
  { nome: "Bruno", vendas: [300, 400, 350] },
  { nome: "Carlos", vendas: [1000, 900, 1100] }
]

    for(let i = 0;i < vendedores.length; i++){
        let soma = 0
        for (let j = 0;j < vendedores[i].vendas[j];j++){
            soma = soma + vendedores[i].vendas[j]
            
            
        }
        console.log(`O ${vendedores[i].nome} vendeu cerca de ${ soma}`)
        if(soma > 2000){
            console.log
            (`Parabéns ${vendedores[i].nome}, voce alcançou a meta`)
        }else { 
            console.log
            (`aaaaah ${vendedores[i].nome}, voce não alcançou a meta`)
        }  
    }
