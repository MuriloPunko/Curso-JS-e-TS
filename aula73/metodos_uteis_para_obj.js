/**
 * object.values
 * object.entries
 * object.assign(des, any)
 * object.getOwnPropertyDescriptor(o, "prop")
 * ... (spread)
 */

/*
ja vimos
object.keys (retorna as chaves)
object.freeze( congela o objeto)
object.defineProperties (define varias propriedades)
object.defineProperty (define uma propriedade)
*/

//const produto = { nome: "produto", preco: 1.8};
//const caneca = { 
 //   ...produto ,
  //  material: "porcelana"
//};

//caneca.nome = "outro nome";
//caneca.preco = 2.5;
//console.log(produto);
//console.log(caneca);

/* const produto = { nome: "produto", preco: 1.8};
const caneca = Object.assign({}, produto, {material: "porcelana"});


caneca.nome = "outro nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca); */

/* const produto = { nome: "produto", preco: 1.8};
const caneca = { nome: produto.nome, preco: produto.preco};


caneca.nome = "outro nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca); */
/* 
const produto = { nome: "produto", preco: 1.8};
Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, "nome")); */

const produto = {nome: "produto", preco: 1.8};
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}



