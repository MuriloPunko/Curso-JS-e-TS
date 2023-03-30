/*  primitivos (imutavais) - string, number, boolean, undefined, null, (bigint, symbol) - valores copiados

    referencia (mutaveis) - array, objeto, function - passados por referencia
*/

    //dessa forma abaixo, as 3 variaveis apontam para o mesmo lugar na memoria, no caso todas apontam para A, se a for modificado
    //todas serao modificadas tambem
    let a = [1, 2, 3];
    let b = a;
    let c = b;

    console.log(a, b, c);

    a.push(4);
    console.log(a, b, c);

    let d = [3, 2, 1];
    let e = [...d]; // dessa forma se faz uma copia(valor imutavel) de D, logo se D for modificado, E não sera, e ja que F é uma copia de E
    let f = e;      // F so sera modificado se E for, pois agora apenas E e F apontam para o mesmo lugar na memoria

    console.log(d, e, f);

    e.pop(2);
    console.log(d, e, f);

    //funciona da mesma maneira para objetos

    const pessoa1 = {
        nome: "Murilo",
        sobrenome: "Punko"
    };
    const pessoa2 = {...pessoa1}; //aqui foi feita a copia da pessoa 1

    pessoa1.nome = "Julio";         //aqui a pessoa 1 foi alterada, 
    console.log(pessoa1, pessoa2);  //porem como a pessoa 2 era uma copia de pessoa 1, ela nao se altera junto com a pessoa 1