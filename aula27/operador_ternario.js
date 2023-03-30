// ? :     <<  operador ternario

const pontosUsuario = 1000
//if(pontosUsuario >= 1000) { 
  //  console.log("usuario VIP");
//}
//else {
  //  console.log("usuario normal")
//}


//encurtando o codigo com operador ternario
const nivelUsuario = pontosUsuario >= 1000 ? "usuario vip" : "usuario normal"; // ? se for verdadeiro   : se for falso

const corUsuario = null;
const corPadrao = corUsuario || "preta";
console.log(nivelUsuario, corPadrao);
