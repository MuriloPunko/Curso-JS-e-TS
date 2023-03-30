//nunca mostrar o erro para o usuario final!!

try{
    console.log(naoexisto);

}catch(error) {
    console.log("nao existe");
}


function soma (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error ("x e y precisam ser numeros. ");
        //throw  ("x e y precisam ser numeros. ");
    }
    return x + y;
}

try{
    console.log(soma(22, 32));
    console.log(soma(2, "bleh"));
} catch(error){
    console.log("alguma coisa mais amigavel");
};