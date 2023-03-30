//for of retorna o valor em si
//em objetos, for of nao é iteravel, logo nao podemos utiliza-lo em objetos
const nome = ["murilo", "joao", "luiz"];

//for (let i = 0; i < nome.length; i++){
  //  console.log(nome[i])
//}

//for (let i in nome){    
  //  console.log(nome[i])
//}

for (let valor of nome){
    console.log(valor);

}