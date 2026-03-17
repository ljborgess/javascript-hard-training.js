// ===================================
// EXERCÍCIO 2 - FILTROS DINÂMICOS AVANÇADO
// ===================================

// Exercício 1: Crie filtro builder
// Uso: filter({ idade: { min: 18, max: 65 }, cidade: 'SP' })
// Retorna função que filtra usuários

function criarFiltro(condicoes) {
  // TODO: retorne função que valida contra as condicoes
}

// Exercício 2: Filtros encadeáveis (chainable)
// Uso: Filtro.maior(idade, 18).igual(cidade, 'SP').executar(usuarios)
// Saída: usuarios que atendem todas as condições

class Filtro {
  constructor(dados) {
    this.dados = dados;
    this.condicoes = [];
  }
  
  maior(campo, valor) {
    // TODO: adicione condição
  }
  
  igual(campo, valor) {
    // TODO: adicione condição
  }
  
  executar() {
    // TODO: aplique todas as condicoes
  }
}

// Exercício 3: Filtro com regex para busca
// Entrada: buscar('nome', /^j/i) em usuários
// Saída: usuarios com nome iniciado em 'j' (case-insensitive)

function buscarPorRegex(campo, regex) {
  // TODO: retorne função que filtra por regex
}

// const filtro = criarFiltro({ idade: 25 });
// console.log(filtro([...]));
