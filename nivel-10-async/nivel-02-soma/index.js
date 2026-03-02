function soma(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const error = false
            if (error){ 
                return reject('Falhou')
            }
            console.log('Esperando 1 segundos')
            resolve(a + b)
        },1000)
    })
}

async function main(){
    try {
    const numero = await soma(5, 7)
    console.log(numero)
    }catch{
        console.log("Error",error)

    }
}

main()

