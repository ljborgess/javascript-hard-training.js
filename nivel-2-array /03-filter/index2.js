const palavras = ["Casa","Porta","Janela","Vidro"]


function filtrarQuatroLetras(arr){
    if (!Array.isArray(arr)){
        throw new Error("Precisa ser uma Array")
    }
    return arr.filter(palavra => palavra.length ===4)

}


console.log(filtrarQuatroLetras(palavras))