//Função para aumento e diminuição de fonte
window.mudarTamanhoFonte = function(acao) {

    const body = document.body;

    body.classList.remove('fonte-aumentada', 'fonte-diminuida');
    if (acao === 'aumentar') {
        body.classList.add('fonte-aumentada');
    } else if (acao === 'diminuir') {
        body.classList.add('fonte-diminuida');
    }

    localStorage.setItem('preferenciaFonte', acao);
    console.log('Preferência salva:', acao);
}

// 2. Recuperar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const preferenciaSalva = localStorage.getItem('preferenciaFonte');

    if (preferenciaSalva) {
        console.log('Carregando preferência:', preferenciaSalva);
        const body = document.body;o
        if (preferenciaSalva === 'aumentar') {
            body.classList.add('fonte-aumentada');
        } else if (preferenciaSalva === 'diminuir') {
            body.classList.add('fonte-diminuida');
        }
    }
});
