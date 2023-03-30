const _velocidade = Symbol("velocidade");
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

   set velocidade(valor){
    if (typeof valor !== "number") return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
   }

   get velocidade(){
        return this[_velocidade];
    }
  

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("fusca");

for(let i = 0; i<=200 ; i++){
    c1.acelerar();
}
c1.velocidade = 94;
console.log(c1.velocidade);



//GETTER
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }
}

const p1 = new Pessoa("luiz", "miranda");
console.log(p1.nomeCompleto)


//SETTER
class Pessoa2{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(" ");
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ");
    }
}
const p2 = new Pessoa2();
p2.nomeCompleto = "murilo punko costa";
console.log(p2.nome);
console.log(p2.sobrenome);