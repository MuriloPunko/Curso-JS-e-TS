function random (min, max){
const r = Math.random() * (max - min) + min;
return Math.floor(r);

};

const min = 1;
const max = 50;
let rand = 10;
//let rand = random(min,max);
//console.log(rand);

while( rand !== 10){
    rand = random(min, max)
    console.log(rand);
};
console.log("##########################");  //do while primeiro atualiza a função e so depois checa a condição
do {                                        //ele atualizou o rand, depois executou o while
    rand = random(min, max)
    console.log(rand);
}while(rand !== 10);