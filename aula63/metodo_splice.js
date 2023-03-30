const nomes = ["maria", "joao", "julia", "pedro", "daniel"];

//nomes.splice(indice atual, delete, elemento1, elemento2, elemento3...);

//max value nesse caso vai remover do indice 3 ate o final do array
//const removidos = nomes.splice(3, Number.MAX_VALUE, );
//const removidos = nomes.splice(3,1, "luiz" );
//const removidos = nomes.splice(3,0, "luiz" );
//const removidos = nomes.splice(3,2, "luiz" );

//simulando o pop
//const removidos = nomes.splice(-1, 1);

//simulando shift
//const removidos = nomes.splice(0,1);

//simulando push
 //nomes.splice(nomes.length ,0 , "luiz", "otavio", "miranda" );

//simulando unshift
nomes.splice(0, 0, "luiz", "otavio", "miranda" );

 console.log(nomes);
 // console.log(nomes, removidos);