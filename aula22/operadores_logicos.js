/**
 * operadores logicos 
 * 
 * && -> AND -> E   -> TODAS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
 * || -> OR  -> OU  -> TODAS EXPRESSÕES PRECISAM SER FALSAS PARA RETORNAR FALSE
 * !  -> NOT -> NÃO -> TODAS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
 */

const usuario = "luizdo34" //veio do form
const senha = "14623"      //veio do form

const vaiLogar = usuario === "luizdo34" && senha === "14623"; //deu certo
//const vaiLogar = usuario === "luizdo34" && senha === "143"; //deu errado

//-----------------------------------------------------------------------------------

//const vaiLogar = usuario === "luizdo34" || senha === "14623"; //deu certo

//const vaiLogar = usuario === "luiz" || senha === "14623"; //deu certo

//const vaiLogar = usuario === "luizdo" || senha === "1423"; //deu errado

console.log(vaiLogar)
