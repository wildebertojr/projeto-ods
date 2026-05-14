document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. NAVEGAÇÃO DA SIDEBAR (MANTIDA) ---
    const rotas = {
        "btn-inicio": "dashboard.html",
        "btn-vagas": "vagas.html",
        "btn-perfil": "perfil.html",
        "btn-candidaturas": "candidaturas.html",
        "btn-config": "configuracoes.html",
        "btn-sair": "index.html"
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

    // --- 2. NOVA LÓGICA DO PERFIL (ACRESCENTADA) ---
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    
    // Lista de todos os campos que você criou no HTML
    const camposIds = [
        'perf-nome', 
        'perf-email', 
        'perf-tel', 
        'perf-sexo', 
        'perf-nascimento'
    ];

    if (editBtn) {
        editBtn.addEventListener('click', () => {
            // Percorre cada ID da lista e libera para digitar
            camposIds.forEach(id => {
                const campo = document.getElementById(id);
                if (campo) {
                    if (campo.tagName === 'SELECT') {
                        campo.disabled = false; // Select usa 'disabled'
                    } else {
                        campo.readOnly = false; // Input usa 'readOnly'
                    }
                    // Muda o estilo visual para mostrar que está editável
                    campo.style.background = "#ffffff";
                    campo.style.border = "1px solid #0f4aa1";
                }
            });

            // Esconde o botão de Editar e mostra o de Salvar
            editBtn.style.display = "none";
            if (saveBtn) saveBtn.style.display = "block";
            
            // Foca automaticamente no primeiro campo (nome)
            document.getElementById('perf-nome').focus();
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            // Aqui você pode adicionar a lógica para salvar no banco de dados futuramente
            alert("Alterações salvas com sucesso!");
            
            // Bloqueia os campos novamente após salvar
            camposIds.forEach(id => {
                const campo = document.getElementById(id);
                if (campo) {
                    if (campo.tagName === 'SELECT') {
                        campo.disabled = true;
                    } else {
                        campo.readOnly = true;
                    }
                    campo.style.background = "#f9f9f9";
                    campo.style.border = "1px solid #ccc";
                }
            });

            // Volta os botões ao estado original
            saveBtn.style.display = "none";
            editBtn.style.display = "block";
        });
    }
});