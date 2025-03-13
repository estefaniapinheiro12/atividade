document.addEventListener("DOMContentLoaded", () => {
    const botao = document.createElement("button");
    botao.textContent = "Iniciar temporizador";
    document.body.appendChild(botao);

    botao.addEventListener("click", () => {
        setTimeout(() => {
            alert("Temporizador concluído!");
        }, 5000);
    });
});