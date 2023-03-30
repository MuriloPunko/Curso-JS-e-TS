const container = document.querySelector(".container"); // pega o conteudo dentro de container
const Fulldate = document.querySelector("#FULLhora");


function diaDaSemana(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "sabado";
            return diaSemanaTexto;
    };



};

function mesTexto(diaMes) {
    let diaMesTexto;
    switch (diaMes) {
        case 0:
            diaMesTexto = "janeiro";
            return diaMesTexto;
        case 1:
            diaMesTexto = "fevereiro";
            return diaMesTexto;
        case 2:
            diaMesTexto = "março";
            return diaMesTexto;
        case 3:
            diaMesTexto = "abril";
            return diaMesTexto;
        case 4:
            diaMesTexto = "maio";
            return diaMesTexto;
        case 5:
            diaMesTexto = "junho";
            return diaMesTexto;
        case 6:
            diaMesTexto = "julho";
            return diaMesTexto;
        case 7:
            diaMesTexto = "agosto";
            return diaMesTexto;
        case 8:
            diaMesTexto = "setembro";
            return diaMesTexto;
        case 9:
            diaMesTexto = "outubro";
            return diaMesTexto;
        case 10:
            diaMesTexto = "novembro";
            return diaMesTexto;
        case 11:
            diaMesTexto = "dezembro";
            return diaMesTexto;

    };

};

const data = new Date(Date.now());
const diaSemana = data.getDay(); 
const diaSemanaTexto = diaDaSemana(diaSemana);
const diaMes = data.getMonth();
const diaMesTexto = mesTexto(diaMes);
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

Fulldate.innerHTML =("");
Fulldate.innerHTML += (`${diaSemanaTexto}, ${diaSemana} de ${diaMesTexto} de ${ano} ${hora}:${minutos}` );

