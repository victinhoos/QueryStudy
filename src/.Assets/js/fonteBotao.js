// ======================================================
// 1. FUNÇÃO PARA MUDAR A FONTE E SALVAR
// ======================================================
function mudarTamanhoFonte(acao) {
    const body = document.body;

    // Remove as classes para evitar conflitos
    body.classList.remove('fonte-aumentada', 'fonte-diminuida');

    // Aplica a classe visualmente
    if (acao === 'aumentar') {
        body.classList.add('fonte-aumentada');
    } else if (acao === 'diminuir') {
        body.classList.add('fonte-diminuida');
    }
    // Se for 'normal', não adiciona nada (usa o padrão do :root)

    // --- O SEGREDO ESTÁ AQUI: SALVAR NO NAVEGADOR ---
    localStorage.setItem('preferenciaFonte', acao);
}

// ======================================================
// 2. FUNÇÃO QUE RODA AO CARREGAR A PÁGINA (RECUPERA DADOS)
// ======================================================
function carregarPreferencias() {
    // Busca o que estava salvo
    const fonteSalva = localStorage.getItem('preferenciaFonte');
    
    // Se existir algo salvo, aplica automaticamente
    if (fonteSalva) {
        // Reutilizamos a função para aplicar a classe
        mudarTamanhoFonte(fonteSalva);
    }
}

carregarPreferencias();
