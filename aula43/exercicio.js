//escreva um função que recebe um numero e retorna o seguinte:
//numero é divisivel por 3 = fizz
//numero é divisivel por 5 = buzz
//numero é divisivel por 3 e 5 = fizzBuzz
//numero não é divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero = retorna o proprio numero
// use a função com numero de 0 a 100



function numero(x) {
    if (typeof x !== "number") {
        return numero;
    }
    if (x % 3 === 0 && x % 5 === 0) {
        return "fizzBuzz";
    }


    if (x % 3 === 0) {
        return "fizz";
    }
    if (x % 5 === 0) {
        return "buzz";
    }

    else {
        return x;
    }

};

for (let i = 0; i <= 100; i++){
console.log(i, numero(i));
};

    





