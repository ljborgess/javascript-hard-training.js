const number = 5

let anterior = 0 ;
let atual = 1 ;
let sequencia = "0,1";

    for(let i = 3; i <= number; i++){
      let  proximo = anterior + atual
      sequencia += `,${proximo}`;
      anterior = atual;
      atual = proximo;
        
    }
    console.log(sequencia)

