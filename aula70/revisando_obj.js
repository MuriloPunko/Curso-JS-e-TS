// função dentro de obj é método
const pessoa1 = new Object();
pessoa1.nome = "luiz";
pessoa1.sobrenome = "otavio";
pessoa1.idade = 21;
pessoa1.falarNome = function (){
    return (`${this.nome} esta falando seu nome.`);

};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
};


//factory function
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa("luiz", "otavio");
const p2 = criaPessoa("gabriel", "otavio");
console.log(p1.nomeCompleto, p2.nomeCompleto);

//


//constructor function
function Pessoa(nome, sobrenome){
this.nome = nome;
this.sobrenome = sobrenome;
}

// new vai criar um obj {}, pega o this e atrela ao obj
const p3 = new Pessoa("maria", "jose");
const p4 = new Pessoa("jose", "maria");
console.log(p3, p4);