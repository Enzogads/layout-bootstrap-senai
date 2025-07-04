document.addEventListener('DOMContentLoaded', () => {
    // Adiciona slide-in ao carregar a página
    document.body.classList.add('slide-in');

    // Manipula cliques em links de navegação
    const links = document.querySelectorAll('.nav-link, .card-music-btn, .card-photo-btn, .contact-cards a, .contact-logo a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            const href = link.getAttribute('href');
            
            // Verifica se o link não está vazio e é uma página interna
            if (href && href !== '#' && !href.startsWith('http')) {
                document.body.classList.add('slide-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Tempo da animação de slide-out (300ms)
            }
        });
    });

    // Controle de visibilidade do botão to-top
    const toTopButton = document.querySelector('.to-top');
    
    // Função para atualizar a visibilidade do botão to-top
    const updateToTopVisibility = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Mostra o botão assim que o usuário rolar a página (qualquer movimento)
        if (scrollPosition > 0) {
            toTopButton.style.display = 'flex';
            toTopButton.style.opacity = '1';
        } else {
            toTopButton.style.opacity = '0';
            setTimeout(() => {
                toTopButton.style.display = 'none';
            }, 300); // Aguarda a transição de opacidade antes de ocultar
        }
    };

    // Debounce para otimizar o evento de rolagem
    let scrollTimeout;
    const debounceScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateToTopVisibility, 50); // Delay de 50ms
    };

    // Executa ao carregar a página e em cada evento de rolagem
    window.addEventListener('scroll', debounceScroll);
    updateToTopVisibility(); // Verifica a visibilidade inicial

    // Garante que o botão to-top comece oculto
    toTopButton.style.opacity = '0';
    toTopButton.style.display = 'none';
});