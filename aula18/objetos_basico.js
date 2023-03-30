const pessoa1 = {
    nome: "Murilo",
    sobrenome: "Punko",
    idade: 20,

    fala(){        //criando uma função "fala" dentro de um objeto (pessoa1)
        console.log(`a minha idade atual é ${this.idade}.`);
    },
    incrementaIdade(){  // criando outra função dentro do mesmo objeto (pesso1)
        this.idade++;
    }  
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();





//function criapessoa (nome, sobrenome, idade){   // <<<
//    return{nome, sobrenome, idade };  // nome : nome  << caso os 2 tenham o mesmo nome, nao precisa colocar 2 vezes 
//};                                     //poderia ficar assim tambem > \\ return{ nome : nome, sobrenome : sobrenome, idade : idade};

//const pessoa1 = criapessoa("Murilo", "Punko", 20);
//const pessoa2 = criapessoa("Gabriel", "Malta", 19);
//const pessoa3 = criapessoa("Pedro", "Gabriel", 20);

//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


       


//const pessoa1 = {
  //  nome : "murilo",
   // sobrenome : "punko",
    //idade : 20
//};                                            criando um objeto, utiliza-se {} para objeto e [] para array

//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.idade);