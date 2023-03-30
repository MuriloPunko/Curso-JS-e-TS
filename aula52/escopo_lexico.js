 const nome = "Luiz";

 function falaNome(){
    console.log(nome);
 }

 function usaFalaNome(){
    const nome = "otavio" //esse otavio nao modifica o escopo lexico da linha 3
    falaNome(); //<< fala nome foi declarada na linha 3 e armazenou na linha 4 "luiz"

 }
 usaFalaNome();