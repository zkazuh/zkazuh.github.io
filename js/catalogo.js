// RENDERIZA OS JOGOS
function renderJogos(lista) {
    const grid = document.querySelector(".lista-jogos-grid");
    if (!grid) return;

    grid.innerHTML = "";

    lista.forEach((jogo, i) => {
        const card = document.createElement("div");
        card.className = "card-lista-jogos";

        card.innerHTML = `
            <img src="${jogo.capa}" alt="${jogo.nome}">
            <div class="info">
                <h3>${jogo.nome}</h3>
                <span class="tag">${jogo.genero}</span>
                <p class="desc">${jogo.descricao}</p>
            </div>
        `;

        grid.appendChild(card);

        // fade automático
        setTimeout(() => card.classList.add("fade"), 70 * i);
    });
}

// BOTÕES
document.querySelectorAll(".nav-lista-jogos-botao").forEach(botao => {
    botao.addEventListener("click", () => {

        // muda classe ativa
        document.querySelectorAll(".nav-lista-jogos-botao")
            .forEach(b => b.classList.remove("active"));

        botao.classList.add("active");

        // plataforma
        const plat = botao.dataset.console;

        // segurança
        if (window.catalogoJogos[plat]) {
            renderJogos(window.catalogoJogos[plat]);
        }
    });
});

// CARREGA PADRÃO ASSIM QUE A PÁGINA ABRIR
document.addEventListener("DOMContentLoaded", () => {
    const botaoPadrao = document.querySelector("[data-console='ps5']");
    if (botaoPadrao) botaoPadrao.classList.add("active");
    renderJogos(window.catalogoJogos.ps5);
});
