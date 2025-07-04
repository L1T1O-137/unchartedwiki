document.addEventListener("DOMContentLoaded", function() {
    const botaoEnviar = document.querySelector(".enviar");

    botaoEnviar.addEventListener("click", function(event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const personagem = document.getElementById("personagem").value.trim();
        const missaofav = document.getElementById("missaofav").value.trim();

       
        if (!nome || !email || !personagem || !missaofav) {
            alert("Por favor, preencha todos os campos antes de continuar!");
            return; 
        }

        
        alert("Bem-vindo à Uncharted Wiki, " + nome + "!");
        window.location.href = "home.html";
    });
});