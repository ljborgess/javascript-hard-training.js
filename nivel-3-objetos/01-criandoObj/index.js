const usuario = {
    nome: "Rafael",
    idade: 20,
    email: "l@l.com.br",
    ativo: true
}

function validar(obj) {

    // verificar se é objeto válido
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        throw new Error("O parâmetro precisa ser um objeto válido")
    }

    // verificar propriedades obrigatórias
    if (!("nome" in obj)) {
        throw new Error("nome é obrigatório")
    }

    if (!("idade" in obj)) {
        throw new Error("idade é obrigatória")
    }

    if (!("email" in obj)) {
        throw new Error("email é obrigatório")
    }

    if (!("ativo" in obj)) {
        throw new Error("ativo é obrigatório")
    }

    // verificar tipos
    if (typeof obj.nome !== "string") {
        throw new Error("nome deve ser string")
    }

    if (typeof obj.idade !== "number") {
        throw new Error("idade deve ser number")
    }

    if (typeof obj.email !== "string") {
        throw new Error("email deve ser string")
    }

    if (typeof obj.ativo !== "boolean") {
        throw new Error("ativo deve ser boolean")
    }

    return "Objeto válido ✅"
}

console.log(validar(usuario))