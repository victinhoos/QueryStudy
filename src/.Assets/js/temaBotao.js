window.addEventListener('load', () => {
    const temaSalvo = localStorage.getItem('temaQueryStudy');
    if (temaSalvo === 'escuro') {
        ativarModoEscuro();
    }
});

function alternarTema() {
    const body = document.body;

    if (body.classList.contains('modo-escuro')) {
        desativarModoEscuro();
    } else {
        ativarModoEscuro();
    }
}

function ativarModoEscuro() {
    const body = document.body;
    const btnTema = document.getElementById('btn-tema');
    const imgTema = btnTema.querySelector('img');

    body.classList.add('modo-escuro');
    imgTema.src = ".Assets/icon/brilhos.svg"; 
    imgTema.alt = "Modo Escuro";
    localStorage.setItem('temaQueryStudy', 'escuro');
}

function desativarModoEscuro() {
    const body = document.body;
    const btnTema = document.getElementById('btn-tema');
    const imgTema = btnTema.querySelector('img');

    body.classList.remove('modo-escuro');
    imgTema.src = ".Assets/ICON/sol.svg";
    imgTema.alt = "Modo Claro";
    localStorage.setItem('temaQueryStudy', 'claro');
}