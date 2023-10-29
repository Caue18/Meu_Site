// Dados Para Página Seguinte
function Enviar() {
    const nomeInput = document.getElementById("nome");
    const acessibilidadeInput = document.getElementById("aces");
    
    const nome = nomeInput.value;
    const acessibilidade = acessibilidadeInput.value;

    if (nome.trim() === "" || acessibilidade.trim() === "") {
        alert("Por favor, preencha ambos os campos.");
    } else if (acessibilidade.trim() !== "") {
        const mensagem = `Nome: ${nome}\nAcessibilidade: ${acessibilidade}`;
        alert(mensagem);
        window.location.href = "Locais.html";
    } else {
        alert("Desculpe, apenas pessoas com acessibilidade podem entrar em Locais.html.");
    }
}