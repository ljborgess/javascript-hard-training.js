// EXERCÍCIO: Agrupar por Tipo - Nível 2
// Objetivo: Separar dados por categorias e tipos

// ========================================
// EXERCÍCIO 1: Agrupar números por propriedade
// ========================================
// TODO: Agrupe números em positivos, negativos e zero
// Ex: [-5, 3, 0, -2, 7] => {positivos: [3, 7], negativos: [-5, -2], zero: [0]}

const a = [-5, 3, 0, -2, 7] 

function group(arr){
    if(!Array.isArray(arr)){
        throw new Error("need to be a array")
    }
    return arr 
            .reduce((acc,valor)=>{
                
                if(valor > 0){
                    acc.positivos.push(valor)
                }if(valor<0){
                    acc.negativos.push(valor)
                }
                if(valor === 0){
                    acc.zero.push(valor)
                }

                 return acc
            },{
                positivos: [],
                negativos: [],
                zero: []

            })
}
console.log(group(a))

// ========================================
// EXERCÍCIO 2: Agrupar objetos por campo
// =======1=================================
// TODO: Agrupe people por idade:
// [{nome: 'Ana', idade: 25}, {nome: 'Bruno', idade: 25}, {nome: 'Carlos', idade: 30}]
// Retorna: {25: [Ana, Bruno], 30: [Carlos]}

const b = [{nome: 'Ana', idade: 25}, {nome: 'Bruno', idade: 25}, {nome: 'Carlos', idade: 30}]

function agruparPorIdade(arr){

    return arr.reduce((acc, pessoa) => {

        const chave = pessoa.idade

        if(!acc[chave]){
            acc[chave] = []
        }

        acc[chave].push(pessoa)

        return acc

    },{})

}

console.log(agruparPorIdade(b))

// ========================================
// EXERCÍCIO 3: Agrupar com contagem
// ========================================
// TODO: Agrupe e conte quantos em cada grupo
// Ex: ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'banana']
// => {maçã: 2, banana: 3, laranja: 1}

const c =  ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'banana']

function groupForFruts(arr){
    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }
    return arr 
        .reduce((acc,value,index)=>{
                let key  = value
                if(!acc[key]){
                    acc[key] = index 
                }
                return acc
        },{})

}
console.log(groupForFruts(c))

// ========================================
// EXERCÍCIO 4: Agrupamento multi-nível
// ========================================
// TODO: Agrupe por tipo, depois por subtipo
// Ex: produtos com {tipo: 'eletrônico', marca: 'Samsung/LG'}

const d =  [
 { nome: "TV 55", tipo: "eletrônico", marca: "Samsung", preco: 3500 },
 { nome: "Geladeira", tipo: "eletrodoméstico", marca: "LG", preco: 4200 },
 { nome: "Celular S23", tipo: "eletrônico", marca: "Samsung", preco: 4500 },
 { nome: "Monitor", tipo: "eletrônico", marca: "LG", preco: 1200 },
 { nome: "Notebook", tipo: "eletrônico", marca: "Dell", preco: 5200 },
 { nome: "Microondas", tipo: "eletrodoméstico", marca: "Panasonic", preco: 900 },
 { nome: "Soundbar", tipo: "eletrônico", marca: "Samsung", preco: 1500 },
 { nome: "TV OLED", tipo: "eletrônico", marca: "LG", preco: 7000 }
]

function groupType(arr){
    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }
        return arr
                .reduce((acc,value)=>{
                   if(value.tipo === 'eletrônico' || 'eletrodoméstico'){
                        acc.tipo.push(value)
                   }
                   if(value.marca === 'Samsung' || 'Dell' || 'LG' ||'Panasonic'){
                        acc.marca.push(value)
                   }
                   return acc 
                },{
                    tipo: [],
                    marca: []
                })
}

console.log(groupType(d))
// ========================================
// EXERCÍCIO 5: Agrupamento com filtro
// ========================================
// TODO: Agrupe apenas elementos que passam em um critério
// Ex: Agrupar apenas strings com mais de 3 caracteres por tamanho

const palavras = [ "sol", "lua", "mar", "rio", "céu", "casa", "livro", "carro", "pé", "flor", "ar", "uva", "paz", "noite", "dia", "mel" ]
function groupFilter(arr){

    if(!Array.isArray(arr)){
        throw new Error("Need to be a Array")
    }

    return arr
        .filter(value => value.length > 3)
        .reduce((acc, value) => {

            const tamanho = value.length

            if(!acc[tamanho]){
                acc[tamanho] = []
            }

            acc[tamanho].push(value)

            return acc

        }, {})

}

console.log(groupFilter(palavras))