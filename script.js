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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscription-form').addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio do formulário

        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        const errorMessage = document.getElementById('error-message');

        // Validação simples de e-mail
        if (!validateEmail(email)) {
            emailInput.classList.add('email-error');
            errorMessage.style.display = 'block';
        } else {
            emailInput.classList.remove('email-error');
            errorMessage.style.display = 'none';

            document.getElementById('email-span').textContent = email;
            document.getElementById('signup-section').style.display = 'none';
            document.getElementById('success-subscription').style.display = 'flex';
        }
    });

    

    window.dismissMessage = function() {
        // Oculta o card de sucesso
        document.getElementById('success-subscription').style.display = 'none';
        // Reexibe a section de inscrição
        document.getElementById('signup-section').style.display = 'flex';
    }
});
