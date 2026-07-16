import { auth, storage } from "./firebase.js";

import {
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const foto = document.getElementById("fotoPerfil");
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

        let fotoURL = utilizadorAtual.photoURL;

        if (foto.files.length > 0) {
            const arquivo = foto.files[0];

            const referencia = ref(storage, "perfis/" + utilizadorAtual.uid);

            await uploadBytes(referencia, arquivo);

            fotoURL = await getDownloadURL(referencia);
        }

        await updateProfile(utilizadorAtual, {
            displayName: nome.value,
            photoURL: fotoURL
        });

        alert("Perfil atualizado com sucesso!");
        window.location = "perfil.html";

    } catch (erro) {
        alert(erro.message);
        console.error(erro);
    }
});
