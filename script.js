// Validação e envio do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio padrão

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    if (!nome || !email || !msg) {
        alert("Preencha todos os campos!");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset(); // limpa os campos
});

// Menu hamburguer responsivo
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('ativo'); // alterna a exibição do menu
    });
}

// Alterna tema claro/escuro
function trocarTema() {
    document.body.classList.toggle("dark");
}