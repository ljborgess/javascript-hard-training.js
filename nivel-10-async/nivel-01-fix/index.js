function gerarNumero(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const erro = false;

            if(erro){
                return ({message: "Error"})
            }
            console.log("Esperando 2 segundos")
            resolve(10)
        }, 2000);
    })
}


async function main(){
    const numero = await gerarNumero()
    console.log(numero * 2)
}

main()