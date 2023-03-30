// <<<<<<<<<<<<<<<<<< FOR OF >>>>>>>>>>>>>>>>>>>

//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let numero of numeros) {

  //  if (numero === 2) {
    //    continue; // continue skipa algo, no caso a condição é se numero for igual a 2, pule(continue) ele e vá para o proximo  
    //}


   // if (numero === 7) {
     //   console.log(numero, "encontrado, saindo...");
       // break;
    //}

    //console.log(numero);
//};

// <<<<<<<<<<<<<<<<<< FOR IN >>>>>>>>>>>>>>>>>>>>>

//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let i in numeros){
//  let numero = numeros[i]

//if (numero === 2){
//  continue;   
//}


//if(numero === 7){
//  console.log(numero ,"encontrado, saindo...");
// break;
//}

//console.log(numero);
//};



// <<<<<<<<<< FOR CLASSIC >>>>>>>>>>>>>>>>>>>>

//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   // let numero = numeros[i]
//for (let i = 0; i < numeros.length; i++) {

    //if (numero === 2) {
      //  continue; 
    //}


    //if (numero === 7) {
        //console.log(numero, "encontrado, saindo...");
      //  break;
    //}

  //  console.log(numero);
//};

// <<<<<<<<<<<<<<<<<<<<< WHILE >>>>>>>>>>>>>>>>>
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //  let i = 0;
    //while (i < numeros.length) {
      //  let numero = numeros[i];

   // if (numero === 2) {
     //   i++
       // continue;   
    //}


    //if (numero === 7) {
      //  console.log(numero, "encontrado, saindo...");
        //i++
    //    break;
    //}

    //console.log(numero);
//};

// <<<<<<<<<<<<<<<<<<<<<<<< DO WHILE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let i = 0;
    do {
        let numero = numeros[i];

    if (numero === 2) {
        i++
        continue; 
    }

    console.log(numero);
    if (numero === 7) {
        console.log(numero, "encontrado, saindo...");
        i++
        break;
    }

    i++
} while (i < numeros.length);
