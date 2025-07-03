// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', function () {
  const whatsapp = document.querySelector('.whatsapp a');

  // Ao clicar no botão do WhatsApp, muda a cor de fundo da página
  whatsapp.addEventListener('click', function () {
    document.body.style.backgroundColor = '#d1fae5'; // Cor verde clara
  });
});

// Captura o botão do WhatsApp e o cabeçalho da página
const whatsappBtn = document.getElementById('whatsappBtn');
const header = document.getElementById('header');

// Cria um Intersection Observer para detectar quando o botão do WhatsApp está sobre o cabeçalho escuro
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quando o botão estiver sobre o cabeçalho escuro, o ícone do WhatsApp fica branco
      whatsappBtn.style.filter = 'invert(100%)'; // Ícone branco
    } else {
      // Quando o botão sair do cabeçalho, volta ao ícone preto
      whatsappBtn.style.filter = 'invert(0%)'; // Ícone preto
    }
  });
}, { threshold: 0.5 }); // Sensibilidade de 50% da visibilidade do cabeçalho

// Inicia a observação do cabeçalho
observer.observe(header);
