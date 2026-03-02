function validarPedido(pedido){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (!pedido){
                return reject(`Este ${pedido} está errado`)
            }
            console.log("Esperando 1 segundos")
            resolve('Este pedido está valido')
        },1000);
    })
}

function processarPagamento(valor){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(valor <= 0){
            return reject("Valor inválido")
        }
        console.log("Pagamento Processado")
        resolve("Pagamento Aprovado")
    },1000);
})
}

function enviarEmail(){
    return new Promise((resolve, reject)=>{ 
        setTimeout(() => {
           console.log("Email enviado")
           resolve("Email enviado com sucesso")
            
        },1000);
    })
}

async function fluxoPedido(){
    try {
        await validarPedido("Notebook")
        await processarPagamento(1500)
        await enviarEmail()
    } catch (erro){
        console.log("Erro no fluxo:",erro)

    }
}

fluxoPedido()