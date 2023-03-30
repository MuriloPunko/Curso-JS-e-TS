/**
 * + adição e concatenação
 * - subtração
 * * multiplicação
 * /divisão
 * ** potenciação
 * % resto da divisão
 * 
 * a precedencia deles é 
 *  () 
 *  ** 
 *  * / % 
 *  + -   
 * 
 *
 * 
 */

let contador = 0;
const passo = 1;

contador += passo; // contador = contador + passo
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);

let contador1 = 2;
const passo1 = 10;

contador1 *= passo1; 
console.log(contador1);

// NaN - not a number

const num1 = 10;
const num2 = "murilo";
console.log(num1 * num2);

//convertendo string em number

const num3 = 10;
const num4 = parseInt("3"); //parseint converte o numero para inteiro
console.log(num3 * num4);

const num5 = 10;
const num6 = parseFloat("4.2"); // parserfloat converte o numero para decimais
console.log(num5 + num6);

const num7 = 10;
const num8 = Number("6.4"); // number converte corretamente para inteiro, decimal ou NaN
console.log(num7 + num8);