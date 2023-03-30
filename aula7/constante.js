/**
 * nao podemos modificar o valor de uma constante
 * nao podemos criar constantes com palavras reservadas
 * constantes precisam ter nomes significativos
 * nao podem conter espaços ou traços
 * nao pode começar o nome da constante com numero
 * utilizamos camelCase
 * Case-sensitive (let oi and let Oi) são diferentes por conta de maiusculo e minusculo
 */

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);

console.log(typeof primeiroNumero);
