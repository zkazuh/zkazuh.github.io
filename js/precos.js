document.addEventListener("DOMContentLoaded", () => {

    const tabela = document.querySelector("#precos tbody");

    const precos = [
        { nome: "Playstation 5", recomendado: true, h1: "R$ 20,00", h3: "R$ 55,00", d3: "-8%", h5: "R$ 85,00", d5: "-15%", dia: "R$ 150,00", ddia: "-25%" },
        { nome: "Xbox Series X", recomendado: true, h1: "R$ 20,00", h3: "R$ 55,00", d3: "-8%", h5: "R$ 85,00", d5: "-15%", dia: "R$ 150,00", ddia: "-25%" },
        { nome: "Nintendo Switch", recomendado: true, h1: "R$ 20,00", h3: "R$ 55,00", d3: "-8%", h5: "R$ 85,00", d5: "-15%", dia: "R$ 150,00", ddia: "-25%" },
        { nome: "Playstation 4 Pro", recomendado: true, h1: "R$ 20,00", h3: "R$ 55,00", d3: "-8%", h5: "R$ 85,00", d5: "-15%", dia: "R$ 150,00", ddia: "-25%" }
    ];

    tabela.innerHTML = precos.map(p => `
        <tr>
            <td>${p.nome} <span>${p.recomendado ? "Recomendado" : ""}</span></td>
            <td>${p.h1}</td>
            <td>${p.h3} <span>${p.d3}</span></td>
            <td>${p.h5} <span>${p.d5}</span></td>
            <td>${p.dia} <span>${p.ddia}</span></td>
        </tr>
    `).join("");

});