document.addEventListener('DOMContentLoaded', function () {
    const whatsappContainer = document.getElementById('whatsappContainer');
    const rodape = document.getElementById('rodape');

    // Verifica se o container do WhatsApp existe
    if (!whatsappContainer) return;

    // Se estiver na página 'local.html', oculta o botão
    if (window.location.href.includes('local.html')) {
        whatsappContainer.style.display = 'none';
        return; // Para a execução, já que não precisa ajustar mais nada
    }

    // Função que ajusta o botão para não invadir o rodapé
    function ajustarPosicaoBotao() {
        const rodapeRect = rodape.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rodapeRect.top < windowHeight) {
            whatsappContainer.style.bottom = `${windowHeight - rodapeRect.top + 20}px`;
        } else {
            whatsappContainer.style.bottom = '20px';
        }
    }

    window.addEventListener('scroll', ajustarPosicaoBotao);
    window.addEventListener('resize', ajustarPosicaoBotao);

    ajustarPosicaoBotao();
});
