import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const cadastroForm = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            senha
        );

        await updateProfile(userCredential.user, {
            displayName: nome
        });

        alert("Conta criada com sucesso!");

        window.location.href = "login.html";

    } catch (erro) {
        alert("Erro: " + erro.message);
    }
});
