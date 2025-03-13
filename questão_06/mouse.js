document.addEventListener("DOMContentLoaded", () => {
    const div = document.createElement("div");
    div.textContent = "Passe o mouse aqui";
    div.style.width = "200px";
    div.style.height = "100px";
    div.style.backgroundColor = "lightgray";
    div.style.textAlign = "center";
    div.style.lineHeight = "100px";
    div.style.margin = "20px";
    document.body.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "yellow";
    });
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "lightgray";
    });
});