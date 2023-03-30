let stringQualquer = "um \"texto\""; // pode se usar \ para utilizar o mesmo tipo de aspas usado no começo da frase
console.log(stringQualquer)

//verificando o indice 01234567 >>> utilize o [], charAT() 
let stringQualquer1 = "um texto";
console.log(stringQualquer1[4]);

// formas de concatenar
let stringQualquer2 = "um texto";
console.log(stringQualquer2.concat(" em ", "um ", "lindo dia", ));
console.log(stringQualquer2 + " em um lindo dia");
console.log(`${stringQualquer2} em um lindo dia`);

// como procurar onde começa o indice de alguma palavra
                     //01234567 
let stringQualquer3 = "um texto";
console.log(stringQualquer3.indexOf("texto"));
// a palavra texto começa no indice 3
//console.log(stringQualquer3.indexOf("o", 3)); dessa forma ele começa a procurar a letra o do indice 3
let stringQualquer4 = "um texto";
console.log(stringQualquer4.lastIndexOf("m", 3)); // isso faz ele começar a procurar de tras pra frente (do 7 ao zero)

//expressões regulares <<< ainda nao foi explicado no curso
let stringQualquer5 = "um texto";
console.log(stringQualquer5.match(/[a-z]/g)); //caso tire o g, ele muda a resposta
console.log(stringQualquer5.match(/[a-z]/));

// quase igual ao indexof porem search aceita expressoes regulares
let stringQualquer6 = "um texto";
console.log(stringQualquer6.search(/[x]/g));

//replace é usado pra substituir uma palavra
let stringQualquer7 = "um texto";
console.log(stringQualquer7.replace("um", "outra"));

let stringQualquer8 = "o rato roeu a roupa do rei de roma";
console.log(stringQualquer8.replace(/r/g, "#")); //g fez substituir todos os r, sem ele apenas o primeiro seria substituido

//vendo o tamanho da string
console.log(stringQualquer8.length);

//slice (fatiar a palavra) nesse ex eu pego as ultimas 3 letras do meu nome
let meuNome = "Murilo";
console.log(meuNome.slice(3));

//split separa letra ou palavra e o numero ao lado mostra quantas vezes eu quero separar
let dia = "hoje o dia esta bem nublado";
console.log(dia.split(" ")); // esta separando por espaço na frase

//colocar tudo em maiusculo e minusculo
console.log(stringQualquer8.toUpperCase());
console.log(stringQualquer8.toLocaleLowerCase());