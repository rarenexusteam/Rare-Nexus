/*
==========================================
RARE NEXUS
Arquivo Principal
==========================================
*/

"use strict";

/* ============================
   Inicialização
============================ */

document.addEventListener("DOMContentLoaded", () => {

    iniciarSite();

});

/* ============================
   Inicializar Sistema
============================ */

function iniciarSite(){

    atualizarAno();

    efeitoHeader();

    scrollSuave();

    voltarAoTopo();

    animarElementos();

}

/* ============================
   Header Dinâmico
============================ */

function efeitoHeader(){

    const header = document.querySelector(".header");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 80){

            header.style.background="#050505";

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

        }

        else{

            header.style.background="#000";

            header.style.boxShadow="none";

        }

    });

}

/* ============================
   Scroll Suave
============================ */

function scrollSuave(){

    const links=document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const destino=document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ============================
   Botão Voltar ao Topo
============================ */

function voltarAoTopo(){

    const botao=document.createElement("button");

    botao.innerHTML="↑";

    botao.id="topButton";

    document.body.appendChild(botao);

    botao.style.position="fixed";

    botao.style.right="25px";

    botao.style.bottom="25px";

    botao.style.width="50px";

    botao.style.height="50px";

    botao.style.border="none";

    botao.style.borderRadius="50%";

    botao.style.background="#D4AF37";

    botao.style.color="#000";

    botao.style.fontSize="20px";

    botao.style.cursor="pointer";

    botao.style.display="none";

    botao.style.zIndex="999";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            botao.style.display="block";

        }

        else{

            botao.style.display="none";

        }

    });

    botao.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ============================
   Fade ao aparecer
============================ */

function animarElementos(){

    const elementos=document.querySelectorAll(

        ".categoria-card,.product-card,.benefit"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    });

    elementos.forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(40px)";

        el.style.transition=".7s";

        observer.observe(el);

    });

}

/* ============================
   Atualizar Ano
============================ */

function atualizarAno(){

    const ano=document.getElementById("ano");

    if(ano){

        ano.textContent=new Date().getFullYear();

    }

}

/* ============================
   Console
============================ */

console.log("Rare Nexus iniciada com sucesso.");

/* =======================================================
   MENU LATERAL
======================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function abrirMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

menuToggle.addEventListener("click", abrirMenu);

overlay.addEventListener("click", fecharMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", fecharMenu);
});
