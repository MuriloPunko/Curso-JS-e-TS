const form = document.querySelector(".form");  // << capturamos o formulario

form.addEventListener("submit", function (e) {  // << adicionamos essa função, que impede que o formulario seja enviado
    e.preventDefault();
    const inputPeso = e.target.querySelector("#pesot") //capturamos o resultado do input de peso do usuario
    const inputAltura = e.target.querySelector("#alturat") //capturamos o resultado do input de altura do usuario

    const peso = Number(inputPeso.value);  //convertemos os inputs para Number
    const altura = Number(inputAltura.value); //convertemos os inputs para Number

    if (!peso) {
        setresultado("peso invalido", false);
        return;
    }

    if (!altura) {
        setresultado("altura invalido", false);
        return;
    }

    const imc = getImc(peso, altura);  // criamos uma função especifica para calcular o IMC
    const nivelImc = getNivelImc(imc)  //aqui pegamos o nivel do IMC   (abaixo do peso, peso normal, etc...)

    const msg = `Seu IMC é ${imc} (${nivelImc})`; // aqui criamos a nossa msg

    setresultado(msg, true); // setamos o resultado com a flag true, para colocarmos a nossa classe
});

function getNivelImc(imc) {     //aqui criamos uma função que verifica qual o nivel do imc da pessoa e armazena no parametro (imc)
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
    //nao precisa de else if, pois caso a funçao if seja verdadeira o return parara o resto da cadeia de ifs     
    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    };
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    };
};

function getImc(peso, altura) { //fizemos uma função que so faz o calculo do IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};


function criaParagrafo() {  //fizemos uma função que so cria 1 paragrafo
    const p = document.createElement("p"); // << isso criou um paragrafo
    return p;
};

function setresultado(msg, isvalid) { //fizemos uma função que seta o resultado, ela recebe uma msg e se o resultado (isvalid) é valido 
    const resultado = document.querySelector(".resultado")  // << captura o resultado / seleciona a div de resultado
    resultado.innerHTML = " "; // < zera o html do resultado

    const p = criaParagrafo();  //cria um paragrafo chamando a função criaParagrafo

    if (isvalid) { //checamos se a flag (isvalid) foi enviada como verdadeira ou falsa, se verdaderia é valido, e adiciona a classe "paragrafo-resultado"
        p.classList.add("paragrafo-resultado") // < cria uma classe para o elemento, no caso é o elemento p 
    } else { // se falsa não é valida, e adiciona a classe "bad"
        p.classList.add("bad")
    }

    p.innerHTML = msg; //<< colocamos um html dentro do paragrafo com a msg que criamos (linha) 
    resultado.appendChild(p);  // << inserimos um elemento na div resultado que é o paragrafo criado (p)
}




