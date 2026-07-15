// =========================
// RARE NEXUS
// script.js
// =========================

// Animação ao rolar a página

const elementos = document.querySelectorAll(".categoria, .produto");

const aparecer = () => {

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {

            el.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", aparecer);

aparecer();


// Pesquisa

const pesquisa = document.querySelector(".search input");

if (pesquisa) {

pesquisa.addEventListener("keyup", () => {

const valor = pesquisa.value.toLowerCase();

document.querySelectorAll(".produto").forEach(produto=>{

const nome = produto.innerText.toLowerCase();

produto.style.display = nome.includes(valor)
? "block"
: "none";

});

});

}


// Botões Comprar

document.querySelectorAll(".produto button").forEach(botao=>{

botao.addEventListener("click",()=>{

alert("Produto adicionado ao carrinho!");

});

});


// Header muda ao rolar

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});
