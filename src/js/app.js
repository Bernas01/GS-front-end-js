document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener("submit", function(e) {
      let valido = true;
      const campos = ['nome', 'email', 'assunto', 'mensagem'];
      campos.forEach(id => {
        const input = document.getElementById(id);
        if (!input.value.trim()) {
          valido = false;
          input.style.border = "2px solid #e07a5f";
        } else {
          input.style.border = "";
        }
      });
      // Validar formato de email simples
      const email = document.getElementById('email');
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (email && !emailRegex.test(email.value.trim())) {
        valido = false;
        email.style.border = "2px solid #e07a5f";
        alert("Por favor, digite um e-mail válido.");
      }
      if (!valido) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios.");
      }
    });
  }
});