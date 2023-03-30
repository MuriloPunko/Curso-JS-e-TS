//função construtora -> objetos

function Pessoa(nome, sobrenome){
//atributos ou metodos privados
const ID = 123456;
const metodoInterno = function(){

};

//atributos ou metodos publicos
this.nome = nome;
this.sobrenome = sobrenome;

this.metodo = function(){
      console.log(this.nome + ": sou um metodo");
    };
}

const p1 = new Pessoa("luiz", "otavio");
const p2 = new Pessoa("Murilo", "Punko");

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();