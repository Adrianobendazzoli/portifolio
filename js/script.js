const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Verifica se o usuário já selecionou o modo noturno anteriormente
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Se o modo noturno estiver habilitado, aplica a classe 'dark-mode'
if (isDarkMode) {
    body.classList.add('body-dark-mode');
}

// Alterna o modo claro/noturno quando o botão for clicado
toggleButton.addEventListener('click', () => {
    body.classList.toggle('body-dark-mode');
    
    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
