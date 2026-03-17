// ===================================
// EXERCÍCIO 2 - ASYNC/AWAIT AVANÇADO
// ===================================

// Exercício 1: Sequencial vs Paralelo
// Execute 3 requisições em paralelo (Promise.all)
// vs sequencial (await em loop)

async function buscarDadosParalelo() {
  // TODO: use Promise.all() para 3 fetch paralelos
}

async function buscarDadosSequencial() {
  // TODO: execute 3 fetch em sequência
}

// Exercício 2: Trate erros com try/catch
// Se API falhar, retorne fallback

async function buscarComFallback(url, fallback) {
  // TODO: tente buscar, se falhar retorne fallback
}

// Exercício 3: Race entre promises
// Execute várias e use a primeira que terminar

async function buscarMaisRapido(urls) {
  // TODO: use Promise.race()
}

// buscarDadosParalelo().then(...);
// buscarMaisRapido(['url1', 'url2', 'url3']).then(...);
