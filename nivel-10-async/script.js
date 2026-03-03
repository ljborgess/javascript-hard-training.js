function esperar3Segundos(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false

            if(error){
                return({message: 'Error message'});
            }
            console.log('Esperando 3 segundos');
            resolve("passaram 3 segundos")
        },3000 )
    })
}

async function executar(){
    try{
        const resultado = await esperar3Segundos()
        console.log(resultado)
    }catch (erro){
        console.log("Erro")
    }
}

executar()