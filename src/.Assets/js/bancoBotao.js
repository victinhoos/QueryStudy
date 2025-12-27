const botoesBanco = document.querySelectorAll('.banco .btn-header');

botoesBanco.forEach(botao => {
    botao.addEventListener('click', function () {

        if (this.classList.contains('ativo')) {
            const totalAtivos = document.querySelectorAll(
                '.banco .btn-header.ativo'
            ).length;

            if (totalAtivos === 1) {
                console.log(
                    "Ação bloqueada: Pelo menos um item deve permanecer selecionado."
                );
                return;
            }
        }

        this.classList.toggle('ativo');

        const bancosSelecionados = [];

        document
            .querySelectorAll('.banco .btn-header.ativo')
            .forEach(btn => {
                bancosSelecionados.push(
                    btn.getAttribute('data-banco')
                );
            });

        console.log("Lista Atualizada:", bancosSelecionados);
    });
});
