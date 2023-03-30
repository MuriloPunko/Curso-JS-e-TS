function rand(min, max) {
    min  *= 1000;
    max  *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(new Error("ERRO"));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi("conexao com o BD", rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi("buscando dados da BASE ", rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi("tratando os dados da BASE ", rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(()=>{
    console.log("exibe dados na tela");
})
  .catch(e => {
    console.lof("ERRO", e);
  });

  console.log("isso sempre sera exibido antes de qualquer promisse")

