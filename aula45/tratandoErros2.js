try {
    // É executada quando não há erros
    //console.log(a);
    console.log("abri um arquivo");
    console.log("manipulei o arquivo e gerou erro");
    console.log("fechei o arquivo");
} catch (error) {
    // É executada  quando há erros
    console.log("Tratando o erro");
} finally {
    // Sempre (podemos omitir)
    console.log("Finally: eu sempre sou executado");
}


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("esperando instancia de Date.");
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
}


try {
    const data = new Date("01-01-1970 12:58:12");
    const hora = retornaHora();
    console.log(hora);

} catch (erro) {
    //tratar erro
} finally {
    console.log("tenha um bom dia")
}