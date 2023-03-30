// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = "punko";
    function criaNome(nome){
        return nome + " " + sobrenome;
    }

function falaNome(){
    console.log(criaNome("Murilo"));
}

falaNome();
console.log(idade, peso, altura.toFixed(2));

})(20, 60, 1.80);

const nome = "marcelo"