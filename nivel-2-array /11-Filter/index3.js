const usuarios = [
  { nome: "Luciano", idade: 22, ativo: true, salario: 3000 },
  { nome: "Maria", idade: 30, ativo: false, salario: 5000 },
  { nome: "João", idade: 19, ativo: true, salario: 2000 },
  { nome: "Ana", idade: 27, ativo: true, salario: 7000 }
]

//apenas usuários ativos 

function ativo(usuarios){
    if(!Array.isArray(usuarios)){
        throw new Error("Necessita ser uma Array")
    } return usuarios
                .filter(usuario => usuario.ativo)
}

function maiorIdade(usuarios){
    if(!Array.isArray(usuarios)){
        throw new Error("Necessita ser um array")
    } return usuarios
                .filter( usuario => usuario.idade > 18)
}

function salario(usuarios){
    if(!Array.isArray(usuarios)){
        throw new Error("Necessita ser uma Array")
    } return usuarios
                .map(usuario => usuario.salario + (usuario.salario*0.2))
}
function ordenar(usuarios){
    if(!Array.isArray(usuarios)){
        throw new Error("Necessita ser uma Array")
    } return usuarios
                .sort((a,b) => a.salario - b.salario)

            }

const maioresIdades = maiorIdade(usuarios)
console.log(maioresIdades)


const salarios = salario(usuarios)
console.log(salarios)

const ativos = ativo(usuarios)
console.log(ativos)

const ordenados = ordenar(usuarios)
console.log(ordenados)