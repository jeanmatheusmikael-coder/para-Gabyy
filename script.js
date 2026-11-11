
// ==================================
// CARTA SURPRESA
// ==================================

function abrirCarta() {
    document.getElementById("letter-content")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}

function fecharCarta() {
    document.getElementById("letter-content")
        .classList.remove("active");

    document.body.style.overflow = "";
}

// Fechar carta clicando fora dela
document.getElementById("letter-content")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            fecharCarta();
        }
    });

// Fechar com tecla ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharCarta();
    }
});


// ==================================
// PARTÍCULAS BRILHANTES
// ==================================

const particles = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDelay =
        Math.random() * 4 + "s";

    particles.appendChild(particle);
}


// ==================================
// CONTADOR DE DATA ESPECIAL
// ==================================

function calcularDias() {

    const campo = document.getElementById("special-date");
    const resultado = document.getElementById("date-result");

    if (!campo.value) {
        resultado.textContent = "Escolha uma data primeiro ❤️";
        return;
    }

    const data = new Date(campo.value + "T00:00:00");

    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);

    if (data > hoje) {
        resultado.textContent =
            "Essa data ainda não chegou! ✨";
        return;
    }

    const diferenca = hoje.getTime() - data.getTime();

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    resultado.textContent =
        dias === 0
        ? "Esse dia especial é hoje! ❤️"
        : `Já se passaram ${dias} dias desde essa data. ♡`;
}


// ==================================
// ANIMAÇÃO SUAVE AO ROLAR
// ==================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .message-card, .quality-card, .photo"
).forEach(element => {

    observer.observe(element);

});
