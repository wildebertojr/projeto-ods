document.addEventListener("DOMContentLoaded", () => {
    // FUNÇÃO DE LOGIN
    const formLogin = document.getElementById("form-login");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("auth-email").value;
            const senha = document.getElementById("auth-senha").value;
            const dados = JSON.parse(localStorage.getItem(email));

            if (dados && dados.senha === senha) {
                localStorage.setItem("logado", email);
                alert("Login realizado com sucesso!");
                window.location.href = "dashboard.html";
            } else {
                alert("Email ou senha incorretos!");
            }
        });
    }

    // NAVEGAÇÃO DO MENU LATERAL
    const botoes = {
        "btn-inicio": "dashboard.html",
        "btn-vagas": "vagas.html",
        "btn-perfil": "perfil.html",
        "btn-candidaturas": "candidaturas.html",
        "btn-config": "configuracoes.html"
    };

    Object.keys(botoes).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.addEventListener("click", () => {
                window.location.href = botoes[id];
            });
        }
    });

    // BOTÃO SAIR
    const btnSair = document.getElementById("btn-sair");
    if (btnSair) {
        btnSair.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja sair?")) {
                localStorage.removeItem("logado");
                window.location.href = "login.html";
            }
        });
    }
});