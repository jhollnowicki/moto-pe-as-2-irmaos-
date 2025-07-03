// Captura o evento de envio do formulário e impede o recarregamento da página
document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o comportamento padrão (recarregar a página)

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação: Verifica se todos os campos foram preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return; // Interrompe a execução se houver campo vazio
    }

    // Efeito visual: Troca a cor e o texto do botão ao clicar
    const botao = document.querySelector('button[type="submit"]');
    botao.classList.remove('bg-black');
    botao.classList.add('bg-green-500');
    botao.textContent = 'Enviado!';

    // Exibe a mensagem de sucesso no formulário
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    mensagemSucesso.classList.remove('hidden');

    // Após 2 segundos, volta o botão e a mensagem ao estado original
    setTimeout(() => {
        botao.classList.remove('bg-green-500');
        botao.classList.add('bg-black');
        botao.textContent = 'Enviar';

        // Oculta a mensagem de sucesso
        mensagemSucesso.classList.add('hidden');

        // Reseta o formulário
        this.reset();
    }, 2000);
});
