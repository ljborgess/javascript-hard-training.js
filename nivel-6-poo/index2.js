// ===================================
// EXERCÍCIO 2 - POO AVANÇADO
// ===================================

// Exercício 1: Crie hierarquia de classes
// Animal -> Cachorro, Gato
// Cada um tem: fazer_som(), mover()

class Animal {
  constructor(nome) {
    // TODO: implemente
  }
}

class Cachorro extends Animal {
  // TODO: implemente fazerSom() retornando "Au au"
}

class Gato extends Animal {
  // TODO: implemente fazerSom() retornando "Miau"
}

// Exercício 2: Implemente Carrinho com desconto progressivo
// A cada item, desconto aumenta (1º: 0%, 2º: 5%, 3º: 10%)

class CarrinhoComDesconto {
  constructor() {
    // TODO: implemente
  }
  
  adicionar(produto) {
    // TODO: calcule desconto baseado na quantidade
  }
  
  total() {
    // TODO: retorne total com descontos aplicados
  }
}

// Exercício 3: Implemente Observer pattern
// Quando carrinho muda, notifique observers

class CarrinhoObservable {
  constructor() {
    // TODO: implemente
  }
  
  subscribe(observer) {
    // TODO: adicione observer
  }
  
  notificar() {
    // TODO: notifique todos os observers
  }
}

// const dog = new Cachorro('Rex');
// console.log(dog.fazerSom()); // "Au au"
// const carrinho = new CarrinhoComDesconto();
