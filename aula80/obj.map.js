const pessoas = [
   { id: 3, nome: "maria"},
   { id: 2, nome: "helena"},
   { id: 1, nome: "marcia"},
];

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}


console.log(novasPessoas);