function changeImageOnResize() {
    const image = document.getElementById('img-login');
    if (window.innerWidth >= 600) {
        image.src = 'assets/images/illustration-sign-up-desktop.svg';
    } else {
        image.src = 'assets/images/illustration-sign-up-mobile.svg';
    }
}

// Verifica a largura da tela no carregamento da página
window.addEventListener('load', changeImageOnResize);

// Verifica a largura da tela quando a janela é redimensionada
window.addEventListener('resize', changeImageOnResize);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscription-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio do formulário

        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        const errorMessage = document.getElementById('error-message');

        // Validação simples de e-mail
        if (!validateEmail(email)) {
            emailInput.style.border = '1px solid red';
            errorMessage.style.display = 'block';
        } else {
            emailInput.style.border = '1px solid #D4D4D4';
            errorMessage.style.display = 'none';

            // Preenche o span com o e-mail do usuário
            document.getElementById('email-span').textContent = email;

            // Exibe o card de sucesso
            document.getElementById('success-subscription').style.display = 'flex';

            // Oculta a section de inscrição
            document.getElementById('signup-section').style.display = 'none';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    window.dismissMessage = function() {
        // Oculta o card de sucesso
        document.getElementById('success-subscription').style.display = 'none';
        // Reexibe a section de inscrição
        document.getElementById('signup-section').style.display = 'flex';
    }
});
