function palindromo(texto){
    if(!texto){
        return "Entrada invalida"
    }
    const textoFormatado = texto
    .toLowerCase()
    .replace(/\s+/g,"")
            //(inicialização , condição , atualização
    for (let i = 0; i < textoFormatado.length / 2; i++){
        if (textoFormatado[i] !== textoFormatado[textoFormatado.length -1 -i]){
            return (" Nao e um palindromo")
        }
        return "É um palindromo"
    }
}

console.log(palindromo("gogo"))