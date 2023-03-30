function rand(min, max) {
    min  *= 1000;
    max  *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
    
        setTimeout(() => {
            if(typeof msg !== "string"){
                reject ("cai no erro");
                return;
         }
         resolve(msg.toUpperCase() + " - Passei na promise");
        }, tempo);
    });
}

const promises = [
    esperaAi("promise1", rand(1, 5)),
    esperaAi("promise2", rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    esperaAi("promise3", rand(1, 5)),
    
];

Promise.race(promises)  //PROMISE.ALL(promises)
.then(function(valor){
console.log(valor);
})
.catch(function(erro){
console.log(erro)
});

// -----------------------


function baixaPagina(){
    const emCache = true; //false

    if(emCache){
        return Promise.resolve("pagina em cache");
    }else{
        return esperaAi("baixei a pagina", 3000);
    }
}
baixaPagina()
.then(dadosPag => {
    console.log(dadosPag);
})
.catch(e => console.log(e));