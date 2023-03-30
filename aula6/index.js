/**
 * nao podemos criar variaveis com palavras reservadas
 * variaveis precisam ter nomes significativos
 * nao podem conter espaços ou traços
 * nao pode começar o nome da varivael com numero
 * utilizamos camelCase
 * Case-sensitive (let oi and let Oi) são diferentes por conta de maiusculo e minusculo
 * não podemos redeclarar variavel com let
 */


let nomeCliente = "João";

console.log(nomeCliente , "nasceu em 1984.");
console.log("Em 2000", nomeCliente ,"conheceu maria.");
console.log(nomeCliente, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nomeCliente, "em 2015.");
console.log("O filho de", nomeCliente, "se chama Eduardo.");

let name; //declarou a variavel
name = "Henrique"; //inicializando a variavel
console.log(name);
name = "Paulo";
console.log(name);

let segundoNome = "jazz";
segundoNome = "filho";
console.log(segundoNome);