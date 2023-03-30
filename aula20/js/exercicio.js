function meuEscopo () {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];
    
   
    
    function recebeEventoForm (evento) {
        evento.preventDefault ();
       
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")

        const informacoes = {
            nomeReal: nome.value ,
            sobrenomeReal: sobrenome.value ,
            pesoReal : peso.value ,
            alturaReal : altura.value
    
            
        };
        pessoas.push(informacoes);

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };
        form.addEventListener("submit", recebeEventoForm);

};

meuEscopo();
