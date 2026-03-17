// ===================================
// EXERCÍCIO 2 - VALIDADORES AVANÇADO
// ===================================

// Exercício 1: Crie validador customizado
// Entrada: email inválido
// Saída esperada: { valido: false, erro: 'Email inválido' }

function validarEmail(email) {
  // TODO: valide formato de email
  // Dica: use regex /^[^@]+@[^@]+\\.[^@]+$/
}

// Exercício 2: Combine múltiplos validadores
// Entrada: { email: 'user@email.com', senha: '123' }
// Saída esperada: { valido: false, erros: ['Senha muito fraca'] }

function validarCadastro(dados) {
  // TODO: execute vários validadores
}

// Exercício 3: Crie factory de validadores
// Uso: const validarMaiuscula = criarValidador('uppercase');
// Entrada: 'hello'
// Saída: { valido: false, erro: '...' }

function criarValidador(tipo) {
  // TODO: retorne função validadora baseada no tipo
}

// console.log(validarEmail('user@email.com'));
// console.log(validarCadastro({...}));
// console.log(criarValidador('uppercase')('HELLO'));
