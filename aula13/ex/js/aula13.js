const nomeUsuario = prompt("digite seu nome: completo");
const numLetras = nomeUsuario.length;
const segundaLetra = nomeUsuario.charAt(1);
const primeiroIndice = nomeUsuario.indexOf("u");
const ultimoIndice = nomeUsuario.lastIndexOf("l");
const ultimasLetras = nomeUsuario.slice(-3);
const palavrasDoNome = nomeUsuario.split(" ");
const nomeMaisculo = nomeUsuario.toUpperCase();
const nomeMinusculo = nomeUsuario.toLocaleLowerCase();

document.body.innerHTML += `Seu nome é: ${nomeUsuario}<br />`;
document.body.innerHTML += `Seu nome tem ${numLetras} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra m no seu nome? ${primeiroIndice}<br />`;
document.body.innerHTML += `Qual o último índice da letra l no seu nome? ${ultimoIndice}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasLetras}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaisculo}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br />`;