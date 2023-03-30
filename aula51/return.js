function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa("luiz", "otavio");

const p2 = {
    nome: "joao",
    sobrenome: "oliveira"
};

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("ola");
console.log(olaMundo("mundo!"));


function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(3));
