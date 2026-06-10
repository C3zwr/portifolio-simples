// --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
document.getElementById('meuFormulario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    var nome = document.getElementById('campoNome').value;
    var email = document.getElementById('campoEmail').value;
    var mensagem = document.getElementById('campoMensagem').value;

    if (nome == "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    if (email == "") {
        alert("Por favor, informe o seu e-mail.");
        return;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    if (mensagem == "") {
        alert("Não se esqueça de digitar a sua mensagem.");
        return;
    }

    alert("Obrigado pelo contato, " + nome + "! Seus dados foram validados com sucesso.");
    document.getElementById('meuFormulario').reset();
});