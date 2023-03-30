//const tresHoras = 60 * 60 * 3 * 1000;   // 3 horas
//const umDia = 60 * 60 * 24 * 1000;      // 24 horas
//const data = new Date(0 + tresHoras + umDia); //   aqui vemos 02/01/1970                   01/01/1970 epoca unix (marco zero)
//const data = new Date(2019, 3 , 20, 15, 14, 27, 888);  // ano, mes, dia, hora, minuto, segundo, milesimo 
//const data = new Date("2019-04-20 20:20:59.873");  // sem os ""  1676297462895
//console.log("dia", data.getDate()); // << getDate pega o numero do dia
//console.log("mes", data.getMonth()); // <<pega o mes
//console.log("ano", data.getFullYear()); // pega o ano
//console.log("horas", data.getHours()); // pega as horas
//console.log("minutos", data.getMinutes()); // pega os minutos
//console.log("segundos", data.getSeconds()); // pega os segundos
//console.log("milesimos", data.getMilliseconds()); //pega os milisegundos
//console.log("dia da semana", data.getDay()); // pega o dia da semana   0-domingo   6-sabado
//console.log(data.toString());
//console.log(Date.now()); // mostra a data atual


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // tira ou add zero a esquerda  
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);