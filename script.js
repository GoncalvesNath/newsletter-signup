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