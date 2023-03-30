//for in lê os indice ou chave (string, array, ou objetos)



const frutas = ["maça", "uva", "banana", "melao"];


for ( let i in frutas){
    console.log(i)
}


const pessoa = {
    nome: "Murilo",
    sobrenome: "Punko",
    idade: 20
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

//for(let i = 0; i < frutas.length; i++){
  //  console.log(frutas[i]);

//};