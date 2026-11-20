
"use strict";

console.log("Site e_EBD carregado com sucesso!");

// CONFIGURAÇÃO DO WHATSAPP
// Substitua pelo número comercial real.
// Formato: 55 + DDD + número, sem espaços.


const numeroWhatsApp = "5594992026460";


const linkWhatsApp = document.getElementById(
    "link-whatsapp"
);

if (linkWhatsApp && numeroWhatsApp) {

    const mensagem = encodeURIComponent(
        "Olá! Gostaria de conhecer o aplicativo e_EBD."
    );

    linkWhatsApp.href =
        `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    linkWhatsApp.target = "_blank";
    linkWhatsApp.rel = "noopener noreferrer";

} else if (linkWhatsApp) {

    linkWhatsApp.addEventListener("click", function(event) {
        event.preventDefault();
        alert("O WhatsApp comercial será configurado em breve.");
    });

}

/* WHATSAPP DO CABEÇALHO */


const whatsappCabecalho = document.getElementById(
    "whatsapp-cabecalho"
);


if (whatsappCabecalho && numeroWhatsApp) {

    const mensagemTopo = encodeURIComponent(
        "Olá! Conheci o site e_EBD e gostaria " +
        "de saber mais sobre o aplicativo."
    );

    whatsappCabecalho.href =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemTopo}`;

    whatsappCabecalho.target = "_blank";
    whatsappCabecalho.rel = "noopener noreferrer";

} else if (whatsappCabecalho) {

    whatsappCabecalho.addEventListener("click", function(event) {
        event.preventDefault();
        alert("O WhatsApp comercial será configurado em breve.");
    });

}
 // FORMULÁRIO DE INTERESSE - WHATSAPP

const formulario = document.getElementById(
    "formulario-contato"
);

const mensagemFormulario = document.getElementById(
    "mensagem-formulario"
);

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        // Validar os campos obrigatórios do HTML
        if (!formulario.reportValidity()) {
            return;
        }

        // Capturar os campos preenchidos
        const dados = new FormData(formulario);

        // Montar a mensagem com os dados do formulário
        let mensagem = "NOVO CONTATO - SITE e_EBD\n\n";

        for (const [campo, valor] of dados.entries()) {

            if (typeof valor === "string" && valor.trim()) {

                const nomeCampo = campo
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, letra => letra.toUpperCase());

                mensagem += nomeCampo + ": " +
                    valor.trim() + "\n";
            }
        }

        mensagem += "\nOlá! Gostaria de conhecer o aplicativo e_EBD.";

        // Preparar o link do WhatsApp
        const urlWhatsApp =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(mensagem);

        // Abrir o WhatsApp
        window.open(urlWhatsApp, "_blank", "noopener,noreferrer");

        // Orientar o visitante
        if (mensagemFormulario) {

            mensagemFormulario.textContent =
                "WhatsApp aberto com seus dados. " +
                "Confira a mensagem e toque em Enviar para concluir o contato.";

            mensagemFormulario.style.color = "#102a43";
        }

    });

}

const videosEBD = {
    superintendente: "",
    professor: ""
};

// Localizar os players da página.

const playersEBD = document.querySelectorAll(
    "iframe[data-video]"
);

playersEBD.forEach(function(player) {

    const tipoVideo = player.dataset.video;

    const videoId = videosEBD[tipoVideo];

    if (videoId) {

        player.src =
            "https://www.youtube-nocookie.com/embed/" +
            encodeURIComponent(videoId);

    }

});

const botaoMenuMobile = document.getElementById("botao-menu-mobile");
const menuPrincipal = document.getElementById("menu-principal");

if (botaoMenuMobile && menuPrincipal) {

    // Abrir e fechar o menu
    botaoMenuMobile.addEventListener("click", function () {

        const menuAberto = menuPrincipal.classList.toggle("menu-aberto");

        botaoMenuMobile.setAttribute(
            "aria-expanded",
            String(menuAberto)
        );

        botaoMenuMobile.setAttribute(
            "aria-label",
            menuAberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );

        botaoMenuMobile.textContent = menuAberto ? "✕" : "☰";

    });

    // Fechar o menu ao selecionar um link
    const linksMenu = menuPrincipal.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menuPrincipal.classList.remove("menu-aberto");

            botaoMenuMobile.setAttribute("aria-expanded", "false");
            botaoMenuMobile.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );

            botaoMenuMobile.textContent = "☰";

        });

    });

}


