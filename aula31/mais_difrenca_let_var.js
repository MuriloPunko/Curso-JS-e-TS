// let tem escopo de bloco  { ...bloco  }
// var so tem escopo de função

const verdadeira = true;

let nome = "murilo"; // criando  << ele vai pra ca
var nome2 = "danilo"; //criando

if (verdadeira) {
let nome = "bruno";   //criando  << ele vai procurar let nome no proximo escopo, se nao achar aqui
var nome2 = "pedro" //redeclarando
//console.log(nome, nome2);
    
    if(verdadeira){
        var nome2 = "gabriel" //redeclarando
        let nome = "outro nome";    //criando << caso nao ache let nome aqui
        console.log(nome, nome2);
    };

};

var sobreNome = "miranda"; // podemos utilizar essa var dentro de uma função, na linha 26 funcionará

function falaOI(){
    //var nome = "luiz";
    console.log(sobreNome)  //funciona
};

//var nome = "pedro" // <<< BEM AQUI 
console.log(nome); // nao funciona, pois var nome esta dentro do escopo de função(linha 25), 
//                                      teriamos que criar outra var nome, no escopo global (linha 29)
