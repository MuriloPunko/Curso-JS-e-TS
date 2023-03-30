const pessoa = {
    nome: "luiz",
    sobrenome: "miranda",
    idade: 30,
    endereco:{  //criando objeto dentro de outro objeto
        rua: "av brasil",
        numero: 320
    }

};

//atribuição via desestruturação
const { nome: letNome, sobrenome, idade } = pessoa;   // << nome: luiz, passou a ser armazenado em uma variavel chamada letNome 
console.log(letNome, sobrenome, idade);

const { endereco: { rua, numero }, endereco} = pessoa;
console.log(endereco)