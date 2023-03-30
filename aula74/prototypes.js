//construtora -> molde (classe)
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return  this.nome + " " + this.sobrenome;
}

//instancia
const pesso1 = new Pessoa("luiz", "O."); // <- pessoa = função construtora
const pesso2 = new Pessoa("Maria", "A."); // <- pessoa = função construtora

console.dir(pesso1);
console.dir(pesso2);
