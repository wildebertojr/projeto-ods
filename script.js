document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. NAVEGAÇÃO DA SIDEBAR (MANTIDA) ---
    const rotas = {
        "btn-inicio": "dashboard.html",
        "btn-vagas": "vagas.html",
        "btn-perfil": "perfil.html",
        "btn-candidaturas": "candidaturas.html",
        "btn-config": "configuracoes.html",
        "btn-sair": "login.html" // Ajustado para o nome do seu arquivo de login
    };

    Object.keys(rotas).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.cursor = "pointer";
            elemento.addEventListener("click", () => {
                if (id === "btn-sair") {
                    if (confirm("Deseja realmente sair?")) {
                        window.location.href = rotas[id];
                    }
                } else {
                    window.location.href = rotas[id];
                }
            });
        }
    });

    // --- 2. LÓGICA DO PERFIL (MANTIDA) ---
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const camposIds = ['perf-nome', 'perf-email', 'perf-tel', 'perf-sexo', 'perf-nascimento'];

    if (editBtn) {
        editBtn.addEventListener('click', () => {
            camposIds.forEach(id => {
                const campo = document.getElementById(id);
                if (campo) {
                    if (campo.tagName === 'SELECT') { campo.disabled = false; } 
                    else { campo.readOnly = false; }
                    campo.style.background = "#ffffff";
                    campo.style.border = "1px solid #0f4aa1";
                }
            });
            editBtn.style.display = "none";
            if (saveBtn) saveBtn.style.display = "block";
            document.getElementById('perf-nome').focus();
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            alert("Alterações salvas com sucesso!");
            camposIds.forEach(id => {
                const campo = document.getElementById(id);
                if (campo) {
                    if (campo.tagName === 'SELECT') { campo.disabled = true; } 
                    else { campo.readOnly = true; }
                    campo.style.background = "#f9f9f9";
                    campo.style.border = "1px solid #ccc";
                }
            });
            saveBtn.style.display = "none";
            editBtn.style.display = "block";
        });
    }

    // --- 3. LÓGICA DE LOGIN E CADASTRO (AJUSTADA AOS SEUS HTMLS) ---

    // LOGIN: Usa o id="btn-auth" que está no seu HTML
    const btnEntrar = document.getElementById('btn-auth');
    if (btnEntrar) {
        btnEntrar.addEventListener('click', (e) => {
            // Verifica se o formulário está preenchido antes de mudar de página
            const form = document.getElementById('form-login');
            if (form.checkValidity()) {
                e.preventDefault();
                window.location.href = "dashboard.html";
            }
        });
    }

    // CADASTRO: Usa o id="form-cadastro" para capturar o envio
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault(); // Para o envio padrão
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html"; // Mude para o nome correto do seu arquivo de login
        });
    }
});