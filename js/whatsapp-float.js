document.addEventListener('DOMContentLoaded', function () {
    const whatsappContainer = document.getElementById('whatsappContainer');
    const rodape = document.getElementById('rodape');

    // Se estiver na página 'local.html', oculta o botão
    if (window.location.pathname.includes('local.html')) {
        whatsappContainer.style.display = 'none';
        return; // para a execução, já que não precisa ajustar mais nada
    }

    // Função que ajusta o botão para não invadir o rodapé
    function ajustarPosicaoBotao() {
        const rodapeRect = rodape.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rodapeRect.top < windowHeight) {
            whatsappContainer.style.bottom = `${windowHeight - rodapeRect.top + 20}px`; // sobe 20px acima do rodapé
        } else {
            whatsappContainer.style.bottom = '20px'; // posição padrão
        }
    }

    window.addEventListener('scroll', ajustarPosicaoBotao);
    window.addEventListener('resize', ajustarPosicaoBotao);

    ajustarPosicaoBotao(); // chama ao carregar a página
});
