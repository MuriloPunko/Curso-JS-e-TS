//                 0         1        2        3       4
const alunos = ["murilo", "joão", "danilo", "malta", "luiz"];

//console.log(alunos instanceof Array) dessa instanceof Array mostra se é True or False se a variavel alunos é um array
 
//console.log(typeof alunos) array é considerado um objeto

//alunos.push("josé");
//console.log(alunos.slice(0, 4));  slice serve para fatiar o array, no caso 0 -3 faz com que so mostre murilo, joao e danilo


//delete alunos[1];  delete faz com que o item dentro do indice seja apagado, mas sem alterar os indices, murilo continua sendo 0, danilo 2...
//console.log(alunos);

//const removidoC = alunos.shift();  SHIFT remove o primeiro indice do array... voce pode guardar em uma variavel o que foi removido
//const removidoF = alunos.pop();  POP remove o ultimo indice do array... voce pode guardar em uma variavel o que foi removido
//console.log(removidoC); 
//console.log(alunos);

//alunos.unshift("luiza") o unshift faz com que vc possa adicionar no indice 0 do array

//alunos.push("josé");  o push faz ele adicionar no array sem precisar saber o tamanho do array

//alunos[alunos.length] = "gustavo";  adiciona ao final do array
//alunos[alunos.length] = "fabio";  adiciona ao final do array
//alunos[alunos.length] = "eric";  adiciona ao final do array

//alunos[1] = "pedro"; substitiu um item do array
//alunos[5] = "nicole"; adiciona um item no array
//console.log(alunos);

//console.log(alunos); verifica tudo que tem dentro do array
//console.log(alunos[3]); verifica um indice especifico do array
//console.log(alunos[2]);