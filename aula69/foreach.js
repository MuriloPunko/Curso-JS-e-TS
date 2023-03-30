//forEach somente dentro de arrays
// serve para fazer a iteração do array

const a1 = [1,2,3];
let total = 0;
a1.forEach(function(valor, indice, array){
        total += valor;
    
});
console.log(total);