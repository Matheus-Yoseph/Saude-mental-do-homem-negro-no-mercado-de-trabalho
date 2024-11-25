// Garantir que o áudio seja retomado corretamente ao voltar para a página
window.addEventListener('pageshow', (event) => {
    if (event.persisted) { // Página carregada do cache
        const savedTime = localStorage.getItem('audioTime');
        if (savedTime) {
            audio.currentTime = savedTime;
        }
        audio.play(); // Retomar a reprodução
    }
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        // Verifica se o link tem target="_blank"
        if (link.target === "_blank") {
            return; // Não intercepta links que abrem em uma nova aba
        }

        event.preventDefault(); // Impede o redirecionamento imediato

        const audio = document.getElementById("transition-sound");
        const href = this.href; // Obtém o URL do link

        // Toca o som e espera que ele termine antes de redirecionar
        audio.play();

        audio.onended = function() {
            window.location.href = href; // Redireciona após o som terminar
        };
    });
});