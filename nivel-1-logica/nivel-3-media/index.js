function notas(a,b,c){
    const media = ( a + b + c  )/ 3 
    
    if(media >=7 ){
        console.log(`Este aluno com a  nota ${media} está Aprovado!`)
    }else if(media >= 5){
        console.log(`Este aluno com a  nota ${media} está de Recuperação!`)
    }else{
        console.log(`Este aluno com a  nota ${media} está Reprovado!`)
    }
}        
    
console.log(notas(10,5,0))