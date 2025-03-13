document.addEventListener("DOMContentLoaded", () => {
    const botao = document.createElement("button");
    botao.textContent = "Carregar dados";
    document.body.appendChild(botao);
    const resultado = document.createElement("pre");
    document.body.appendChild(resultado);

    botao.addEventListener("click", () => {
        fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
            .then(response => response.json())
            .then(data => {
                resultado.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error("Erro na requisição:", error));
    });
});
