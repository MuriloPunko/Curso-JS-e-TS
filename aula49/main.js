//declaração de função (function hoisting)
falaOi();


function falaOi(){
    console.log("oi");
}

//first-class objects (objetos de primeira classe)
//function expression

const souUmDado = function(){
    console.log("sou um dado");
};

function executaFuncao(funcao){
    console.log("vou executar sua função abaixo");
    funcao();
}

executaFuncao(souUmDado);

//Arrow function

const funcaoArrow = () => {
    console.log("sou uma arrow function");
};

funcaoArrow();

//dentro de um objeto

const objeto = {
falar(){
    console.log("estou falando...")
}
};
objeto.falar();