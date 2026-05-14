document.addEventListener("DOMContentLoaded", () => {
    
    const rotas = {
        "btn-inicio": "dashboard.html",
        "btn-vagas": "vagas.html",
        "btn-perfil": "perfil.html",
        "btn-candidaturas": "candidaturas.html",
        "btn-config": "configuracoes.html",
        "btn-sair": "login.html" 
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

    const btnEntrar = document.getElementById('btn-auth');
    if (btnEntrar) {
        btnEntrar.addEventListener('click', (e) => {
            const form = document.getElementById('form-login');
            if (form.checkValidity()) {
                e.preventDefault();
                window.location.href = "dashboard.html";
            }
        });
    }

    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html"; 
    }
});