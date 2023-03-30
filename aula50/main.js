function funcao(a , b = 2, c = 6){
    console.log( a + b + c);

}
funcao(2, undefined, 8);

function funcao2({nome, sobrenome, idade}){
console.log(nome, sobrenome, idade);
}
//funcao2({nome: "luiz", sobrenome: "otavio", idade: 29});
let obj = {nome: "luiz", sobrenome: "otavio", idade: 29}; 
funcao2(obj);

function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3(["murilo", "punko", 27]);

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "*") acumulador *= numero;
        if (operador === "/") acumulador /= numero;
    }
    console.log(acumulador);
}
conta("*", 1, 30, 20, 10, 70 ); // operador *, acumulador 1, resto 30, 20, 10, 70
