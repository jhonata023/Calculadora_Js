console.log("Bem-Vindo");

let tela = document.querySelector(".tela").querySelector("h1");
        let tela2 = document.querySelector(".tela").querySelector("h3");
        let telaOperador = document.querySelector(".tela").querySelector("h2");
        let operacao;
        let a;

        function clicar(a) {
            const teclas = document.getElementById(a).innerText;
            tela.innerText += teclas;
        }

        function somar() {
            operacao = "soma";
            telaOperador.innerText = "+"
            tela2.innerText += tela.innerText ;
            a = tela.innerText;

            tela.innerText = "";
        }
        
        function multiplicar() {
            operacao = "multiplicação";
            telaOperador.innerText = "x"
            tela2.innerText += tela.innerText ;
            a = tela.innerText;

            tela.innerText = "";
        }

        function dividir() {
            operacao = "divisão";
            telaOperador.innerText = "÷"
            tela2.innerText += tela.innerText ;
            a = tela.innerText;

            tela.innerText = "";
        }

        function subtrair() {
            operacao = "subtrair";
            telaOperador.innerText = "-"
            tela2.innerText += tela.innerText ;
            a = tela.innerText;

            tela.innerText = "";
        }


        function igual() {
            let b = tela.innerText;
            let produto;
            console.log(b);
            
            if(operacao === 'soma') {
                produto = parseFloat(a) + parseFloat(b);
            } else if (operacao === "multiplicação") {
                produto = parseFloat(a) * parseFloat(b);
            } else if (operacao === "divisão") {
                produto = parseFloat(a) / parseFloat(b);
            } else if (operacao === "subtrair") {
                produto = parseFloat(a) - parseFloat(b);
            }

            tela.innerText = produto;
            tela2.innerText = a + telaOperador.innerText + b;
            telaOperador.innerText = "="

        }

        function reset() {
            tela.innerText = "";
            tela2.innerText = "";
            telaOperador.innerText = "";
            operacao = "";
            a = "";
        }