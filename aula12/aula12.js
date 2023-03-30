let valorA = "A"; //B
let valorB = "B"; //C
let valorC = "C"; //A

const valorAB =  valorB;
valorB = valorC;
valorC = valorA;

console.log(valorAB, valorB, valorC);