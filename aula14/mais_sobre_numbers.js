let num1 = 3.32167;
let num2 = 4;
let num3 = 0.7;
let num4 = 0.1;

//console.log(num1.toString() + num2); // toString vai converter number em string somente na linha em que foi utilizado
//num1 = num1.toString(); // dessa forma ele vai converter permanentemente para string
//console.log(num1.toString(2)); //o 2 dentro do parenteses mostra o num1(3) em binario
//console.log(num1.toFixed(2)); //toFixed limita as casas decimais 
//console.log(Number.isInteger(num2)); //Number.isInteger retorna se a variavel possui ou não um numero inteiro com True or False
//let temp = num1 * "ola";
//console.log(Number.isNaN(temp)); //Number.isNaN retorna se a conta é um NaN(not a number)

//num3 += num4; //0.8
//num3 += num4; //0.9
//num3 += num4; //1.0
//num3 += num4; //1.1
//num3 += num4; //1.2
//num3 += num4; //1.3
//num3 += num4; //1.4
//num3 += num4; //1.5
//num3 += num4; //1.6
//num3 += num4; //1.7
//num3 += num4; //1.8
//num3 += num4; //1.9
//num3 += num4; //2.0

//essa parte do codigo ira arredondar precisamente contas inteiras
//quando se faz 0.8 + 0.2 ele resulta em 0.9999999... 
//porem utilizando o metodo abaixo, ele resultara em 1, e sendo um numero inteiro
//(sem o parsefloat, ele mostrará 1, porem será 0.99999... e retornara false para inteiro)

/**
 *  num3 = parseFloat(num3.toFixed(2));   
 *  console.log(num3);
 *  console.log(Number.isInteger(num3));
 */

//outra forma de resolver o problema a cima é
num3 = ((num3 * 100) + (num4 * 100))  / 100;
num3 = ((num3 * 100) + (num4 * 100))  / 100;
num3 = ((num3 * 100) + (num4 * 100))  / 100;
console.log(num3);
console.log(Number.isInteger(num3));
