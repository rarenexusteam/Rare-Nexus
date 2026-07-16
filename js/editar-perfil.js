import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const nome = document.getElementById("nome");
const salvar = document.getElementById("salvar");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    nome.value = user.displayName || "";

});

salvar.addEventListener("click", async () => {

    const user = auth.currentUser;

    if (!user) return;

    try {

        await updateProfile(user, {
            displayName: nome.value
        });

        alert("Perfil atualizado com sucesso!");

        window.location.href = "perfil.html";

    } catch (erro) {

        alert("Erro: " + erro.message);

    }

});
