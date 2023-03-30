const h1 = document.querySelector(".container h1");
//const data = new Date();
//h1.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: "short", timeStyle: "short" }); nao funciona nas versoes atuais
h1.innerHTML = (new Date()).toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" }) //funciona nas versoes atuais