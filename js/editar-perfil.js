import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const preview = document.getElementById("preview");
const nome = document.getElementById("nome");
const salvar = document.getElementById("salvar");

let utilizadorAtual = null;

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location = "login.html";
        return;
    }

    utilizadorAtual = user;

    nome.value = user.displayName || "";

    if (user.photoURL) {
        preview.src = user.photoURL;
    }
});

salvar.addEventListener("click", async () => {
    try {

        if (!utilizadorAtual) return;

       await updateProfile(utilizadorAtual, {
    displayName: nome.value
});

        alert("Perfil atualizado com sucesso!");
        window.location = "perfil.html";

    } catch (erro) {
        alert(erro.message);
        console.error(erro);
    }
});
