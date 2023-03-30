function GetDiaSemanaTexto(diaSemana){ // << ESSE PARAMETRO AQUI VAI LA PRA LINHA 33
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "segunda";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "terça";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "quarta";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "quinta";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "sexta";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "sabado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = " "; //funciona como um else
    };

}



const data = new Date("2019-04-20 20:20:59.873");
const diaSemana = data.getDay(); //esse diasemana pega o dia da semana
const diaSemanaTexto = GetDiaSemanaTexto(diaSemana); // diaSemanaTexto puxa a função GetDiaSemanaTexto e o parametro diaSemana



//switch (diaSemana) {
  //  case 0:
    //    diaSemanaTexto = "domingo";
      //  break;
    //case 1:
      //  diaSemanaTexto = "segunda";
        //break;
    //case 2:
      //  diaSemanaTexto = "terça";
        //break;
    //case 3:
      //  diaSemanaTexto = "quarta";
        //break;
    //case 4:
      //  diaSemanaTexto = "quinta";
        //break;
    //case 5:
      //  diaSemanaTexto = "sexta";
        //break;
    //case 6:
      //  diaSemanaTexto = "sabado";
        //break;
    //default:
      //  diaSemanaTexto = " "; //funciona como um else
//};




//if(diaSemana === 0) {
//  diaSemanaTexto = "domingo";
//}
//else if(diaSemana === 1) { 
//   diaSemanaTexto = "segunda";
//}
//else if(diaSemana === 2) {
//  diaSemanaTexto = "terça";
//}
//else if(diaSemana === 3) {
//  diaSemanaTexto = "quarta";
//}
//else if(diaSemana === 4) {
//  diaSemanaTexto = "quinta";
//}
//else if(diaSemana === 5) {
//  diaSemanaTexto = "sexta";
//}
//else if(diaSemana === 6) {
//  diaSemanaTexto = "sabado";
//} else {
//  diaSemanaTexto = " ";
//};

console.log(diaSemana, diaSemanaTexto);
