/* // new Object -> object.prototype
const objA = {
    chaveA: "A"

// __proto__: object.prototype
};

const objB = {
    chaveB: "B"

// __proto__: objA
};

const objC = new Object();
objC.cjaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA); */

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto("camiseta", 50);
//p1.desconto(100);
p1.aumento(100);
console.log(p1);
const p2 = {
    nome: "caneca",
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99

},
tamanho2: {  
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
},


});



p3.aumento(10);
console.log(p3);