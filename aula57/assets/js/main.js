function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();

        },

        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert("conta invalida");
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert("conta invalida");
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener("click", (e) => {
                const elemento = e.target;

                if (elemento.classList.contains("btn-num")) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains("btn-del")) {
                    this.apagaUm();
                }

                if (elemento.classList.contains("btn-eq")) {
                    this.realizaConta();
                }
                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };

}


const calculadora = criaCalculadora();
calculadora.inicia();