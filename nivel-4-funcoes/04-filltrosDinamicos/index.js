function criarFiltro(propriedade,valor){
    return function(objeto){
        if(typeof valor === 'boolean' && typeof propriedade === 'string')
        return objeto[propriedade] === valor            // filtra dentro do filtro
                                                        // faz um filtro automático
    }
}
const usuarios = [
  { nome: "Luciano", ativo: true },
  { nome: "Ana", ativo: false },
  { nome: "Carlos", ativo: true }
]

const filtrarAtivo = criarFiltro("ativo", true)

const resultado = usuarios.filter(filtrarAtivo)

console.log(resultado)