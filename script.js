document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE LOGIN ---
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

    // --- LÓGICA DE CADASTRO ---
    const formCadastro = document.getElementById("form-cadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("reg-nome").value;
            const email = document.getElementById("reg-email").value;
            const senha = document.getElementById("reg-senha").value;
            const area = document.getElementById("reg-area").value;

            const dados = { nome, email, senha, area };
            localStorage.setItem(email, JSON.stringify(dados));

            alert("Cadastro realizado! Agora faça seu login.");
            window.location.href = "login.html";
        });
    }

    // --- LOGOUT (SAIR) ---
    const btnSair = document.getElementById("btn-sair");

    if (btnSair) {
        btnSair.addEventListener("click", () => {
            const confirmar = confirm("Tem certeza que deseja sair?");

            if (confirmar) {
                localStorage.removeItem("logado");
                window.location.href = "login.html";
            }
        });
    }
});