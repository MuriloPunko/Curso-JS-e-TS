function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== "number"){
                throw new TypeError("typeof invalido");
            }
            estoquePrivado =valor;
        }

    });
}

//const p1 = new Produto("camiseta", 20, 3);
//console.log(p1);
//p1.estoque = 345
//console.log(p1.estoque);

// <<<<<<<<<<< factory function

function criaProduto(nome){
    return{
        get nome() {
            return nome;
        },
        set nome(valor){
            valor = valor.replace("coisa.", "");
            nome = valor;
        }
    };
}

const p2 = criaProduto ("outra camisa");
p2.nome = "qualquer coisa.";
console.log(p2.nome);