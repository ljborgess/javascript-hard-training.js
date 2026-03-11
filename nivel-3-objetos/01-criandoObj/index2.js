// EXERCÍCIO: Criando Objetos - Nível 2
// Objetivo: Trabalhar com criação e manipulação de objetos

// ========================================
// EXERCÍCIO 1: Objeto construtor
// ========================================
// TODO: Crie um função construtora para Pessoa com nome, idade e apresentar()
// function Pessoa(nome, idade) {}
// const pessoa = new Pessoa('João', 25)
// pessoa.apresentar() // "Olá, meu nome é João e tenho 25 anos"

class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        return (`Olá ,meu ${this.nome} é joão e tenho ${this.idade} anos`)
    }
}

const pessoa = new Pessoa('João',25)

console.log(pessoa)

// ========================================
// EXERCÍCIO 2: Objeto com métodos privados
// ========================================
// TODO: Crie um objeto Banco com saldo privado e métodos depositar/sacar
// Impedir acesso direto ao saldo

class Banco {
    #nome 
    #idade
    #saldo
    constructor(nome,idade,saldo){
        this.#nome = nome
        this.#idade = idade
        this.#saldo = saldo 
        

    if(this.#idade < 18){
        throw new Error("Vocẽ não é maior que 18 anos!")
    }else{
        console.log("Aprovado!")
    }

    }
    
    saldoAtual(){
        return console.log(`Vocẽ tem um saldo de ${this.#saldo}`)
    }
    depositar(valor){
        if(valor < 0){
            throw new Error("O Valor não de pode ser zero")
        }
        this.#saldo += valor
        console.log(`Depósito no valor de ${valor} depositado com sucesso!`)
    }
    sacar(valor){
        if(valor > this.#saldo){
            throw new Error("Valor de retirada iválido(Saldo insuficiente)")
        }
        this.#saldo -= valor
        console.log(`O Valor de ${valor} está retirado!`)
    }

}


const Person = new Banco('Luciano',18,1500)

Person.depositar(1550)
Person.sacar(1000)
Person.saldoAtual()






// ========================================
// EXERCÍCIO 3: Clonar objeto
// ========================================
// TODO: Crie uma função que clona um objeto profundamente
// TODO: Implemente de forma rasa (shallow) e profunda (deep)

// ========================================
// EXERCÍCIO 4: Mesclagem de objetos
// ========================================
// TODO: Crie função que mescla múltiplos objetos
// Ex: merge({a: 1}, {b: 2}, {c: 3}) => {a: 1, b: 2, c: 3}

// ========================================
// EXERCÍCIO 5: Objeto com validação
// ========================================
// TODO: Crie um objeto Usuário que valida email, telefone, idade
// Implemente getters/setters com validação
