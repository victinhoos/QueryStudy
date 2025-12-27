const btnConfig = document.getElementById('btn-config');
const containerDireito = document.getElementById('container-direito');

if (btnConfig) {
    btnConfig.addEventListener('click', () => {
        containerDireito.classList.toggle('expandido');
    });
}
