document.addEventListener('DOMContentLoaded', function() {
    // Simulação de envio de formulário (mantida para a simulação)
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }

});
