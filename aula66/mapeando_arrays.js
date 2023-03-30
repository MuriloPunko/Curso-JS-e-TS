const numeros = [2, 3, 23, 532, 42, 8756, 123];
const numeroDobro = numeros.map(function(valor){
    return valor * 2;
});

console.log(numeroDobro);

const pessoas = [
    {nome: "luiz", idade: 62},
    {nome: "maria", idade: 23},
    {nome: "eduardo", idade: 55},
    {nome: "leticia", idade: 19},
    {nome: "rosana", idade: 32},
    {nome: "wallace", idade: 47},

];

const nomes = pessoas.map(function(obj){
    return obj.nome;
});

const idades = pessoas.map(function(obj){
    return ({idade: obj.idade});
});

const comIDS = pessoas.map(function(obj, indice){
    const newObj = {...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
})
console.log(pessoas);
console.log(comIDS)