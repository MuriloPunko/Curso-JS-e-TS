// defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, //controla se o valor pode ou nao ser alterado
        configurable: false // nao é configuravel << true é configuravel
    });
}

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);

//-------------------------
function Produto2(nome, preco, estoque){

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true

        },
        preco:{
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true
        },
       
    
    });

}

const p2 = new Produto2("camisa", 40, 10);
console.log(Object.keys(p2));

for (let chave in p2){
    console.log(chave);
}
