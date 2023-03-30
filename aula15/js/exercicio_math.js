//forma que o professor resolveu (mais facil)
const numero = Number(prompt("digite um numero: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = " ";
texto.innerHTML += `<p>a raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>é NaN : ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>arredondando pra baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>arredondando pra baixo: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>com duas casas decimais : ${numero.toFixed(2)}</p>`


//a forma abaixo foi a maneira q eu achei q resolver o exercicio, criando divs no index.HTML

/**const numero = Number(prompt("digite um numero: "));
const numeroTitulo = document.getElementById("numero-titulo");

const raizTitulo = document.getElementById("raiz-titulo");
const raiz = numero ** 0.5;

const inteiroTitulo = document.getElementById("inteiro-titulo");
const inteiroTemp = parseFloat(numero.toFixed(2));
const inteiro = Number.isInteger(inteiroTemp);

const NanTitulo = document.getElementById("Nan-titulo");
const Nan = Number.isNaN(numero);

const arredondaPBaixoT = document.getElementById("arredondaPBaixo-titulo");
const arredondaPBaixo = Math.floor(numero);

const arredondaPCimaT = document.getElementById("arredondaPCima-titulo");
const arredondaPCima = Math.ceil(numero);

const decimalT = document.getElementById("decimal-titulo");
const decimal = numero.toFixed(2);

numeroTitulo.innerHTML = numero;

raizTitulo.innerHTML = `a raiz quadrada: ${raiz}`;

inteiroTitulo.innerHTML = `${numero} é inteiro: ${inteiro}`;

NanTitulo.innerHTML = `é NaN : ${Nan}`;

arredondaPBaixoT.innerHTML = `arredondando pra baixo: ${arredondaPBaixo}`;

arredondaPCimaT.innerHTML = `arredondando pra baixo: ${arredondaPCima}`;

decimalT.innerHTML = `com duas casas decimais : ${decimal}`;

*/
