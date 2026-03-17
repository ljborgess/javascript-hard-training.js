// ===================================
// EXERCÍCIO 2 - OBJETOS MUITO AVANÇADO
// ===================================

// Exercício 1: Implemente Proxy para validação
// Quando tentar atribuir valor inválido, lance erro
// const user = new ValidatedUser({ nome: '' });
// user.nome = 123; // Erro!

class ValidatedUser {
  // TODO: use Proxy para validar
}

// Exercício 2: Implemente WeakMap para cache privado
// Dados privados que não interferem com enumeração

function criarCachePrivado() {
  // TODO: use WeakMap para dados privados
}

// Exercício 3: Implemente Object.defineProperty
// Para criar propriedades com getters/setters customizados

function criarPropriedadesCustomizadas(obj) {
  // TODO: defina propriedades com Object.defineProperty
}

// const user = new ValidatedUser({ nome: 'João' });
// console.log(user);
