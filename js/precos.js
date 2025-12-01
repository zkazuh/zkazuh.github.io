// ===============================
// PREÇOS DOS CONSOLES (JSON)
// ===============================
const precos = [
    {
        console: "PlayStation 5",
        h1: "R$ 20",
        h3: "R$ 55",
        h5: "R$ 85",
        dia: "R$ 150"
    },
    {
        console: "Xbox Series X",
        h1: "R$ 20",
        h3: "R$ 55",
        h5: "R$ 85",
        dia: "R$ 150"
    },
    {
        console: "Nintendo Switch",
        h1: "R$ 15",
        h3: "R$ 40",
        h5: "R$ 70",
        dia: "R$ 120"
    },
    {
        console: "PS4 Pro",
        h1: "R$ 12",
        h3: "R$ 30",
        h5: "R$ 50",
        dia: "R$ 90"
    }
];

// ===============================
// PREENCHE A TABELA AUTOMATICAMENTE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#precos tbody");

    precos.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.console}</td>
            <td>${item.h1}</td>
            <td>${item.h3}</td>
            <td>${item.h5}</td>
            <td>${item.dia}</td>
        `;

        tbody.appendChild(tr);
    });
});
