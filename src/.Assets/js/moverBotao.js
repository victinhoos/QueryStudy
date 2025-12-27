// Move o botão para a div de resposta
function moverBotao(elementoBotao) {
    const destino = document.getElementById('resposta');
            
    if (destino) {
            destino.appendChild(elementoBotao);
            elementoBotao.setAttribute("onclick", "voltarBotao(this)");
            }
        }

 // Devolve o botão para a div de alternativa
function voltarBotao(elementoBotao) {
    const origem = document.getElementById('alternativa')
        if (origem) {
                origem.appendChild(elementoBotao);
                elementoBotao.setAttribute("onclick", "moverBotao(this)");
            }
        }