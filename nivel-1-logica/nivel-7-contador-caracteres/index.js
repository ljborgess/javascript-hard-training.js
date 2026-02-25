function contador(texto){
    if (typeof texto !== 'string'){
        throw new Error("Você precisa digitar uma palavra")
    }
    let caracteres = 0
    let semEspaco = 0
    let vogais = 0
    let consoantes = 0
    
    const textoFormatado = texto.toLocaleLowerCase()
    
    //(inicialização , condição , atualização
    for( let i = 0 ; i <= texto.length;i++){
        const caractere = textoFormatado[i]
        total++;
        

    }
}