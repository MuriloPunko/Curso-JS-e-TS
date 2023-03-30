// filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor, indice, array){
    return valor > 10;
};

const numerosFilrados = numeros.filter(callBackFilter);
console.log(numerosFilrados);


const pessoas = [
    {nome: "luiz", idade: 62},
    {nome: "maria", idade: 23},
    {nome: "eduardo", idade: 55},
    {nome: "leticia", idade: 19},
    {nome: "rosana", idade: 32},
    {nome: "wallace", idade: 47},

];

const pessoasComNomeGrande = pessoas.filter(function(obj){
    return obj.nome.length >= 5;

});

const  PessoasCMDCA = pessoas.filter(function(obj){
    return obj.idade > 50;
});

const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.toLocaleLowerCase().endsWith("a");
});

console.log(nomeTerminaComA);