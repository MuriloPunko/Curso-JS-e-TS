//let a = "A";  // B
//let b = "B";  // C
//let c = "C";  // A

//atribuição via desestruturação
//const numeros = [1, 2, 3];
//[a, b, c] = numeros;  

//----------------------------

//const letras = [b, c, a];
//[a, b, c] = letras;  

//console.log(a, b, c);

//const numeros = [1, 2, 3, 4, 5, 6 ,7, 8, 9];
//const primeiroNumero = numeros[0]; 
//console.log(primeiroNumero);

const numeros =  [1000, 2000, 3000, 4000, 5000, 6000 ,7000, 8000, 9000];
const [primeiroNumero, segundoNumero, , quartoNumero, , sextoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, quartoNumero, sextoNumero );
console.log(resto);

//                             0                   1                   2                  
//                       0     1     2       0     1     2       0     1     2
const numerosDois =  [ [1000, 2000, 3000], [4000, 5000, 6000] ,[7000, 8000, 9000] ];
console.log(numerosDois[1][2])

//atribuição via desestruturação
const numerosTres =  [ [1000, 2000, 3000], [4000, 5000, 6000] ,[7000, 8000, 9000] ];
const [lista1, lista2, lista3] = numerosTres
console.log(lista3[2]);
