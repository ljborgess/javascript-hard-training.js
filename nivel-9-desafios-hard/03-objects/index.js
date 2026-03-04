const usuarios = [
  { nome: "Luciano", idade: 22 },
  { nome: "Maria", idade: 30 },
  { nome: "João", idade: 19 }
]

function transformar(usuarios){
    if(!Array.isArray(usuarios)){
        throw new Error("Não é uma Array")
    } return usuarios
                .map((usuario)=>{
                    return {
                        nome: usuario.nome,
                        maiorDeIdade : usuario.idade >=18
                    }
                })
}
console.log(transformar(usuarios))