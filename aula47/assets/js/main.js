function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
}

const relogio = document.querySelector(".relogio");
//const iniciar = document.querySelector(".iniciar");
//const pausar = document.querySelector(".pausar");
//const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


document.addEventListener("click", function (e) {  // desse jeito fica mais otimizado e poupa recurso, pegamos o click no documento todo
    const elemento = e.target;  // aqui mostra o elemento que esta sendo clicado

    if (elemento.classList.contains("iniciar")) {
        clearInterval(timer);
        relogio.classList.remove("pausado");
        iniciaRelogio();
    };

    if (elemento.classList.contains("pausar")) {
        relogio.classList.add("pausado");
        clearInterval(timer);
    };
    if (elemento.classList.contains("zerar")) { // se contem a classe zerar capture o evento
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
        relogio.classList.remove("pausado");
    };

});



//iniciar.addEventListener("click", function (evento) {
  //  relogio.classList.remove("pausado");
    //clearInterval(timer);
    //iniciaRelogio();
//});


//pausar.addEventListener("click", function (evento) {
  //  relogio.classList.add("pausado");
    //clearInterval(timer);

//});

//zerar.addEventListener("click", function (evento) {
  //  clearInterval(timer);
    //relogio.innerHTML = "00:00:00";
    //segundos = 0;
//});

