/**
 * IF pode ser usado sozinho
 * SEMPRE que utilizo a palavra else, preciso de um if antes
 * posso ter quantos else if eu quiser na checagem
 * so posso utilizar o else uma vez na checagem
 */

const hora = 15;

if (hora >=0 && hora <= 11){
    console.log("bom dia!");
} else if(hora >= 12 && hora <= 17){
    console.log("boa tarde!");
} else if(hora >= 18 && hora <= 23){
    console.log("boa noite!");
} else{
    console.log("algo esta errado!!!");
}