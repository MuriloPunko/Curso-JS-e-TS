const documento = document.querySelector(".container")

const elementos = [
    {tag: "p", texto: "frase 1"},
    {tag: "div", texto: "frase 2"},
    {tag: "footer", texto: "frase 3"},
    {tag: "section", texto: "frase 4"},
];



const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
   
}

documento.appendChild(div);