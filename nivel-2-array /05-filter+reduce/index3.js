// EXERCÍCIO: Filter + Reduce - Nível 3
// Objetivo: Combinar filter() e reduce() para solucionar problemas

// ========================================
// EXERCÍCIO 1: Filtrar pares e somar
// ========================================
// TODO: Filtre números pares e some-os com reduce()
// Ex: [1, 2, 3, 4, 5, 6] deve retornar 12 (2+4+6)
const numbers = [1, 2, 3, 4, 5, 6]

function soluction(arr){
    if(!Array.isArray(arr)){
        throw new Error("its need to be a Array")
    }
    return arr
            .filter((number)=>{if(number % 2 === 0){return arr}})
            .reduce((acc,y)=>{return acc + y})
}

console.log(soluction(numbers))


// ========================================
// EXERCÍCIO 2: Filtrar maiores e contar
// ========================================
// TODO: Filtrar números maiores que 5 e contar quantos elementos restam
// Ex: [3, 7, 2, 9, 1, 8] deve retornar 3 (7, 9, 8)


function bigger(arr){
if(!Array.isArray(arr)){
        throw new Error("its need to be a Array")
    }
    return arr
            .filter((num)=>{
                if(num > 5){
                    return arr
                }
            })
            .reduce((acc,y)=>{
                return acc + y
            }
        )
}

console.log(bigger(numbers))

// ========================================
// EXERCÍCIO 3: Filtrar sem negativos e criar string
// ========================================
// TODO: Filtrar números negativos e criar uma string concatenada
// Ex: [5, -3, 8, -1, 4] deve retornar "5,8,4"

const negative = [5, -3, 8, -1, 4]

function createStr(arr){
    if(!Array.isArray(arr)){
        throw new Error("its need to be a Array")
    }
    return arr
            .filter((number)=>{
                if(number > 0)
                    return arr
            .reduce((acc,y)=>{
                return  acc + y

            })
            },"")
}
console.log(createStr(negative))


// ========================================
// EXERCÍCIO 4: Filtrar e agrupar por categoria
// ========================================
// TODO: Filtrar objetos com valor > 50 e agrupar por tipo
// Ex: [
//   {tipo: 'A', valor: 60},
//   {tipo: 'B', valor: 30},
//   {tipo: 'A', valor: 70}
// ] deve retornar {A: [60, 70]}

const categoria = [
  {tipo: 'A', valor: 60},
  {tipo: 'B', valor: 30},
  {tipo: 'A', valor: 70}
]

function filterAgr(arr){
    
    if(!Array.isArray(arr)){
        throw new Error("Its need to be a Array")
    }

    return arr
        .filter(obj => obj.valor > 50)
        .reduce((acc, y) => {

            if(!acc[y.tipo]){
                acc[y.tipo] = []
            }

            acc[y.tipo].push(y.valor)

            return acc

        }, {})
}

console.log(filterAgr(categoria))


// ========================================
// EXERCÍCIO 5: Análise de dados completa
// ========================================
// TODO: Filtre pontuações maiores que 50 e calcule média, máximo e mínimo usando reduce
// Ex: [30, 60, 45, 80, 55] deve retornar {media: 65, max: 80, min: 55, total: 3}

const list = [30, 60, 45, 80, 55] 

function dataComplet(arr){
    if (!Array.isArray(arr)){
        throw new Error("its need to be a Array")
    }
     return arr 
            .filter((number)=> number > 50)
            .reduce((acc,y)=>{
                if(acc.media){
                    acc.media = y / y.length
                }
                
            },{media,
                max,
                min,
                total
            })
        
}
console.log(dataComplet(list))