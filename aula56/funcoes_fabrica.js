//Factory function (função fabrica)
// constructive function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");


        },

        fala(assunto = "falando sobre nada"){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //getter
        get imc() { //get faz imc fingir ser um atributo ao em vez de uma função
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("murilo", "punko", 1.80, 60);
console.log(p1.imc, p1.fala("falando sobre DS"));
const p2 = criaPessoa("yuri", "lipisk", 1.74, 72);
console.log(p2.imc, p2.fala("falando sobre A.R.G"));
const p3 = criaPessoa("joao", "bastos", 1.84, 85);
console.log(p3.nomeCompleto);

p1.nomeCompleto = "justin shalton dias"
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());


