const nomes = ["eduardo", "maria", "joana"];
const removido = nomes.pop();
console.log(nomes, removido);

const nomes1 = ["eduardo", "maria", "joana"];
nomes1.push("joao");
nomes1.push("kaique");

nomes1.unshift("murilo");
nomes1.shift();
console.log(nomes1);

//shift e unshift podem trazer problemas de performace pois deslocam todo o array

const nomes2 = ["eduardo", "maria", "joana", "rosana", "danilo"];
const novo = nomes2.slice(1, -1);
console.log(novo);

const nome3 = "luiz, otavio, miranda,outra";
const nome4 = nome3.split(",");
console.log(nome4);

const nomes5 = ["luiz", "otavio", "miranda"];
const nome6 = nomes5.join(" ");
console.log(nome6);