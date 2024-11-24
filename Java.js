document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
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