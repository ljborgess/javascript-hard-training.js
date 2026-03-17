// ===================================
// EXERCÍCIO 2 - SISTEMA DE PEDIDO COM ASYNC
// ===================================

// Exercício 1: Pipeline de validação assíncrono
// 1. Validar usuário
// 2. Validar produtos
// 3. Processar pagamento
// 4. Confirmar pedido

async function processarPedido(usuario, produtos) {
  // TODO: execute validações em sequência e
  //       retorne erro se alguma falhar
}

// Exercício 2: Retries - tente novamente se falhar
// Se requisição falhar, tente novamente até 3 vezes

async function buscarComRetry(url, maxTentativas = 3) {
  // TODO: implemente retry automático
}

// Exercício 3: Timeout - se demorar muito, cancele
// Se requisição demorar mais de X segundos, abandone

async function buscarComTimeout(url, timeoutMs = 5000) {
  // TODO: use Promise.race() com timer
}

// processarPedido(usuario, produtos).then(...).catch(...);
// buscarComRetry('/api/data').then(...);
// buscarComTimeout('/lenta-api', 3000).then(...);
