const h1 = document.querySelector(".container h1");
const data = new Date();


//TIRANDO OS SWITCHS
//function diaDaSemana(diaSemana) {
   // let diaSemanaTexto;
    //switch (diaSemana) {
      //  case 0:
        //    diaSemanaTexto = "domingo";
          //  return diaSemanaTexto;
        //case 1:
          //  diaSemanaTexto = "segunda-feira";
            //return diaSemanaTexto;
        //case 2:
          //  diaSemanaTexto = "terça-feira";
            //return diaSemanaTexto;
        //case 3:
          //  diaSemanaTexto = "quarta-feira";
           // return diaSemanaTexto;
        //case 4:
          //  diaSemanaTexto = "quinta-feira";
            //return diaSemanaTexto;
        //case 5:
          //  diaSemanaTexto = "sexta-feira";
            //return diaSemanaTexto;
        //case 6:
          //  diaSemanaTexto = "sabado";
            //return diaSemanaTexto;
    //};
//}

//function mesTexto(diaMes) {
    //let diaMesTexto;
    //switch (diaMes) {
      //  case 0:
        //    diaMesTexto = "janeiro";
          //  return diaMesTexto;
        //case 1:
       //     diaMesTexto = "fevereiro";
      //      return diaMesTexto;
        //case 2:
      //      diaMesTexto = "março";
        //    return diaMesTexto;
    //    case 3:
      //      diaMesTexto = "abril";
        //    return diaMesTexto;
    //    case 4:
     //       diaMesTexto = "maio";
       //     return diaMesTexto;
      //  case 5:
        //    diaMesTexto = "junho";
      //      return diaMesTexto;
     //   case 6:
       //     diaMesTexto = "julho";
         //   return diaMesTexto;
        //case 7:
          //  diaMesTexto = "agosto";
            //return diaMesTexto;
   //     case 8:
     //       diaMesTexto = "setembro";
       //     return diaMesTexto;
   //     case 9:
   //         diaMesTexto = "outubro";
     //       return diaMesTexto;
       // case 10:
      //      diaMesTexto = "novembro";
        //    return diaMesTexto;
       // case 11:
         //   diaMesTexto = "dezembro";
           // return diaMesTexto;

    //};

//};


//ARRAY NO LUGAR DE SWITCH
function mesTexto(diaMes){
const meses = ["janeiro" , "fevereiro" , "março", "abril", "maio", "junho", "julho", "agosto"
, "setembro", "outubro", "novembro", "dezembro"]
    return meses[diaMes];

};
//ARRAY NO LUGAR DE SWITCH
function diaDaSemana(diaSemana){
const diasSemana =  ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado" ];
return  diasSemana [diaSemana]
};


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
};

function criaData(data) {
    const diaSemana = data.getDay();
    const diaMes = data.getMonth();

    const nomeDia = diaDaSemana(diaSemana);
    const nomeMes = mesTexto(diaMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()},` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} `
};


h1.innerHTML = criaData(data);  