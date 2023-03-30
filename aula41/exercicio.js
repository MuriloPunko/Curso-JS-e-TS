//escreva uma função que receba dois numeros e retorne o maior deles

function max (x, y){
    if (x > y){
        return x;
    }
        return y;
    };


const maior = max(38, 60);
console.log(maior);


function maiorN (x, y){
    return x > y ? x : y;
}

console.log(maiorN(20, 22));

const max2 = (x, y) => x > y ? x : y;
console.log(max2(15, 17));