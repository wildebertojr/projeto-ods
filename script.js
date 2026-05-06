document.addEventListener("DOMContentLoaded", () => {

    let modoCadastro = false;
    let tipoConta = "";

    // alternar login/cadastro
    document.getElementById("toggle-cadastro").addEventListener("click", () => {
        modoCadastro = !modoCadastro;

        document.getElementById("auth-title").innerText = modoCadastro ? "Cadastro" : "Login";
        document.getElementById("btn-auth").innerText = modoCadastro ? "Cadastrar" : "Entrar";
        document.getElementById("tipo-conta").style.display = modoCadastro ? "block" : "none";
    });

    // escolher tipo
    document.getElementById("tipo-usuario").addEventListener("click", () => {
        tipoConta = "usuario";
        alert("Candidato selecionado");
    });

    document.getElementById("tipo-empresa").addEventListener("click", () => {
        tipoConta = "empresa";
        alert("Empresa selecionada");
    });

    // botão principal
    document.getElementById("btn-auth").addEventListener("click", () => {

        const email = document.getElementById("auth-email").value;
        const senha = document.getElementById("auth-senha").value;

        if (modoCadastro) {

            if (!tipoConta) {
                alert("Escolha o tipo!");
                return;
            }

            const nome = prompt("Digite seu nome:");

            const dados = { nome, email, senha, tipo: tipoConta };

            localStorage.setItem(email, JSON.stringify(dados));

            alert("Cadastro feito!");

        } else {

            const dados = JSON.parse(localStorage.getItem(email));

            if (dados && dados.senha === senha) {

                localStorage.setItem("logado", email);

                document.getElementById("nome-usuario").innerText = dados.nome;
                document.getElementById("status-usuario").innerText =
                    dados.tipo === "empresa" ? "Empresa logada" : "Candidato logado";

                alert("Login ok!");

            } else {
                alert("Erro no login");
            }
        }
    });

    // carregar usuário
    const email = localStorage.getItem("logado");

    if (email) {
        const dados = JSON.parse(localStorage.getItem(email));

        if (dados) {
            document.getElementById("nome-usuario").innerText = dados.nome;
            document.getElementById("status-usuario").innerText =
                dados.tipo === "empresa" ? "Empresa logada" : "Candidato logado";
        }
    }

    // vagas
    const vagas = {
        "Auxiliar de Logística": {
            empresa: "Logis Express",
            salario: "R$ 1800",
            desc: "Controle de estoque"
        },
        "Atendente de Loja": {
            empresa: "Super Norte",
            salario: "R$ 1650",
            desc: "Atendimento ao cliente"
        }
    };

    document.querySelectorAll(".btn-small").forEach(btn => {
        btn.addEventListener("click", (e) => {

            const titulo = e.target.closest(".card").querySelector("h4").innerText;
            const vaga = vagas[titulo];

            document.getElementById("det-titulo").innerText = titulo;
            document.getElementById("det-empresa").innerText = "Empresa: " + vaga.empresa;
            document.getElementById("det-salario").innerText = "Salário: " + vaga.salario;
            document.getElementById("det-desc").innerText = vaga.desc;
        });
    });

    document.getElementById("btn-candidatar").addEventListener("click", () => {
        alert("Candidatura enviada!");
    });

});