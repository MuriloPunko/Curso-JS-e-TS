/**
 * FALSY (qualquer coisa diferente de FALSY retorna true)
 * false
 * 0
 * NaN
 * Null / Undefined
 * ""  ''  ``
 */

//function falaOi(){
//return "Oi";
//};

//let vaiExecutar = "Joãozinho";
//console.log(vaiExecutar && falaOi());  // executa a função pois a variavel(let) não é FALSY



//function falaOi(){
  //  return "Oi";
    //};
    
   // let vaiExecutar = NaN; // Null / Undefined / ""  ''  `` / 0 / false   QUALQUER UM DESSES FAZ A FUNÇÃO NAO SER EXECUTADA
    //console.log(vaiExecutar && falaOi()); // não executa a função pois é FALSY

    //----------------------------------------
    
    //const corUsuario = null;
    //const corPadrao = corUsuario || "preto";

    //console.log(corPadrao);




    //const corUsuario = "verde";
    //const corPadrao = corUsuario || "preto";

    //console.log(corPadrao);
    
    // -------------------------------------

    a = 0;
    b = null;
    c = "false";
    d = false;
    e = NaN;

    console.log(a || b || c || d || e)  // nesse caso, ele retorna o primeiro valor verdadeiro "false"


    //a = 0;
    //b = null;
    //c = false;
    //d = false;
    //e = NaN;

    //console.log(a || b || c || d || e) // aqui ele retorna o ultimo valor falso (NaN)